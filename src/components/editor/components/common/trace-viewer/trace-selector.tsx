import React, { useMemo, useState } from "react"
import {
  RxRef,
  useRx,
  useRxRef,
  useRxSuspenseSuccess,
  useRxValue
} from "@effect-rx/rx-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import { Icon } from "@/components/icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import {
  useDevTools,
  useSelectedSpan,
  useSetSelectedSpan,
  useSelectedSpanIndex
} from "@/workspaces/context/devtools"

export function TraceSelector() {
  const [open, setOpen] = useState(false)
  const devTools = useDevTools()
  const rootSpans = useRxValue(devTools.rootSpans)
  const span = useSelectedSpan()
  const setSelectedSpan = useSetSelectedSpan()
  const selectedSpanIndex = useSelectedSpanIndex()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select a trace"
          aria-expanded={open}
          className="flex-1 justify-between md:min-w-[350px]"
        >
          {span?.traceId || "Select a trace..."}
          <Icon
            name="arrows-up-down"
            className="ml-2 h-4 w-4 shrink-0 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <Command>
          <CommandInput placeholder="Search traces..." />
          <CommandEmpty>No traces found.</CommandEmpty>
          <CommandGroup heading="Traces">
            <CommandList>
              {rootSpans.map((ref, index) => (
                <CommandItem
                  key={ref.value.traceId}
                  onSelect={() => {
                    setSelectedSpan(index)
                    setOpen(false)
                  }}
                >
                  {ref.value.traceId}
                  <Icon
                    name="check"
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedSpanIndex === index
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
