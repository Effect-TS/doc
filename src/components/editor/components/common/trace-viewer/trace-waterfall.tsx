import React, { useMemo } from "react"
import { Array, Duration, Option } from "effect"
import {
  RxRef,
  useRxRef,
  useRxSuspenseSuccess,
  useRxValue
} from "@effect-rx/rx-react"
import {
  CellContext,
  ColumnDef,
  ExpandedState,
  RowData,
  Table as ReactTable,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
  RowSelectionState
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Span } from "@/workspaces/domain/devtools"
import { TraceDetails } from "./trace-details"
import { TraceTree } from "./trace-tree"
import { formatDuration } from "./utils"
import { useSelectedSpanValue } from "@/workspaces/context/devtools"

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    grow: boolean
  }
}

const columns: Array<ColumnDef<Span>> = [
  {
    id: "name",
    accessorFn: (node) => node,
    header: () => (
      <h5 role="columnheader" className="ml-2 !font-bold">
        Name
      </h5>
    ),
    cell: (props) => <NameCell {...props} />,
    minSize: 200
  },
  {
    id: "span",
    accessorFn: (node) => node,
    header: () => (
      <h5 role="columnheader" className="grow ml-2 !font-bold">
        Duration
      </h5>
    ),
    cell: (props) => <DurationCell {...props} />,
    meta: {
      grow: true
    },
    enableResizing: false
  }
]

export function TraceWaterfall() {
  const selectedSpan = useSelectedSpanValue()
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(
    {}
  )
  const [expanded, setExpanded] = React.useState<ExpandedState>(true)
  const data = useMemo(
    () => (selectedSpan === undefined ? [] : [selectedSpan]),
    [selectedSpan]
  )

  const table = useReactTable<Span>({
    data,
    columns,
    state: {
      columnVisibility: {
        attributes: false,
        duration: false,
        events: false
      },
      expanded,
      rowSelection
    },
    columnResizeMode: "onChange",
    enableRowSelection: true,
    enableSubRowSelection: false,
    onExpandedChange: setExpanded,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (span) => span.children as Array<Span>
  })

  const columnSizeVars = React.useMemo(() => {
    const headers = table.getFlatHeaders()
    const colSizes: { [key: string]: number } = {}
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!
      colSizes[`--header-${header.id}-size`] = header.getSize()
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize()
    }
    return colSizes
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [table.getState().columnSizingInfo, table.getState().columnSizing])

  return (
    <div className="h-full w-full">
      <Table style={columnSizeVars}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="flex border-x">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    style={{
                      width: `calc(var(--header-${header?.id}-size) * 1px)`
                    }}
                    className={cn(
                      "grid grid-cols-[minmax(150px,1fr)_8px] items-center p-0 border-t",
                      header.column.columnDef.meta?.grow && "grow"
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanResize() && (
                      <div
                        role="separator"
                        aria-label="drag to resize"
                        onDoubleClick={() => header.column.resetSize()}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className="h-full w-px border-l px-[3px] cursor-ew-resize"
                      />
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        {/* When resizing any column we will render this special memoized version of our table body */}
        {table.getState().columnSizingInfo.isResizingColumn ? (
          <MemoizedTableBody table={table} />
        ) : (
          <UnmemoizedTableBody table={table} />
        )}
      </Table>
    </div>
  )
}

const MemoizedTableBody = React.memo(
  UnmemoizedTableBody,
  (prev, next) => prev.table.options.data === next.table.options.data
) as typeof UnmemoizedTableBody

function UnmemoizedTableBody({
  table
}: {
  readonly table: ReactTable<Span>
}) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
            className="flex border-x"
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                style={{
                  width: `calc(var(--col-${cell.column.id}-size) * 1px)`
                }}
                className={cn(
                  "min-h-8 grid grid-cols-[minmax(150px,1fr)_8px] items-center p-0",
                  cell.column.columnDef.meta?.grow && "grow"
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                {cell.column.getCanResize() && (
                  <div
                    role="separator"
                    className="h-full w-px border-l px-[3px]"
                  />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            className="h-24 w-auto text-center"
          >
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}

function NameCell({ getValue, row }: CellContext<Span, unknown>) {
  const node = getValue<Span>()
  return (
    <div className="h-full flex items-start ml-2 overflow-hidden text-ellipsis whitespace-nowrap">
      <button
        type="button"
        className="h-full flex items-start"
        onClick={row.getToggleExpandedHandler()}
      >
        <TraceTree row={row} />
      </button>
      <div className="h-8 flex items-center">
        <span className="ml-1.5 overflow-hidden text-ellipsis">
          {node.label}
        </span>
      </div>
    </div>
  )
}

function DurationCell({ getValue, row, column }: CellContext<Span, unknown>) {
  const currentSpan = getValue<Span>()
  const root = currentSpan.isRoot
    ? currentSpan
    : row.getParentRows()[0]?.original

  if (root === undefined) {
    return null
  }

  const rootDuration = Option.getOrThrow(root.duration)
  const rootNanos = Number(Duration.unsafeToNanos(rootDuration))
  const scaleFactor = column.getSize() / rootNanos

  const rootStartDuration = Option.getOrThrow(root.startTime)
  const rootStartNanos = Number(Duration.unsafeToNanos(rootStartDuration))
  const currentStartDuration = Option.getOrThrow(currentSpan.startTime)
  const currentStartNanos = Number(
    Duration.unsafeToNanos(currentStartDuration)
  )
  const currentDuration = Option.getOrThrow(currentSpan.duration)
  const currentNanos = Number(Duration.unsafeToNanos(currentDuration))

  const spacer = (currentStartNanos - rootStartNanos) * scaleFactor
  const width = `${(currentNanos / rootNanos) * 100}%`

  return (
    <div className="w-full flex items-center justify-start">
      <div role="separator" style={{ width: spacer }} />
      <div className="h-full w-full flex flex-col justify-center">
        <button
          type="button"
          aria-label="select table row"
          style={{ width }}
          className="h-6 my-1 flex border border-black/40 dark:border-white rounded-sm"
          onClick={row.getToggleSelectedHandler()}
        >
          <div className="mt-[3px] ml-2 bg-white/90 rounded-sm leading-3">
            <span className="px-1 font-display text-black text-xs">
              {formatDuration(currentDuration)}
            </span>
          </div>
        </button>
        {row.getIsSelected() && <TraceDetails span={currentSpan} />}
      </div>
    </div>
  )
}
