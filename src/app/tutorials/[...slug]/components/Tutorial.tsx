"use client"

import dynamic from "next/dynamic"
import React from "react"

export declare namespace Tutorial {
  export interface Props {
    readonly workspace: string
    readonly children: React.ReactNode
  }
}

export const Tutorial: React.FC<Tutorial.Props> = ({
  workspace,
  children
}) => {
  const Editor = editor(workspace)
  return (
    <div className="flex-1 flex flex-row overflow-hidden">
      <div className="basis-1/2">{children}</div>
      <div className="basis-1/2">
        <Editor />
      </div>
    </div>
  )
}

const editor = (workspace: string) =>
  dynamic(
    async () => {
      const ws = (await import(`@/workspaces/${workspace}`)).default
      const Editor = (await import("./CodeEditor")).CodeEditor
      return () => (<Editor workspace={ws} />) as any
    },
    { ssr: false }
  )
