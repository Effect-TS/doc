import { useRxSet, useRxValue } from "@effect-rx/rx-react"
import clsx from "clsx"
import { useEffect, useRef } from "react"
import { useWorkspace } from "../../context/WorkspaceContext"
import { editorRx } from "../../rx/editor"
import { LoadingSpinner } from "../LoadingSpinner"

export declare namespace FileEditor {
  export interface Props {}
}

export const FileEditor: React.FC<FileEditor.Props> = () => {
  const workspace = useWorkspace()
  const containerRef = useRef(null)
  const rx = editorRx(workspace)
  const setElement = useRxSet(rx.element)
  const editor = useRxValue(rx.editor)

  useEffect(() => {
    if (containerRef.current) {
      setElement(containerRef.current)
    }
  }, [containerRef, setElement])

  const isReady = editor._tag === "Success"

  return (
    <section className="h-full flex flex-col">
      {!isReady && <LoadingSpinner />}
      <div
        ref={containerRef}
        className={clsx("flex-grow w-full", !isReady && "hidden")}
      />
    </section>
  )
}
