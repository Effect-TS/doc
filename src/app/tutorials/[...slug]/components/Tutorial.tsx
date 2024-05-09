"use client"

import { Directory, File, Workspace } from "@/domain/Workspace"
import { effectPackageJson } from "@/tutorials/common"
import dynamic from "next/dynamic"
import Link from "next/link"
import React from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

export function Tutorial({
  name,
  files,
  navigation,
  next,
  children
}: {
  readonly name: string
  readonly files: ReadonlyArray<{
    readonly name: string
    readonly initial: string
    readonly solution: string | undefined
  }>
  readonly navigation: React.ReactNode
  readonly children: React.ReactNode
  readonly next:
    | {
        readonly title: string
        readonly url: string
      }
    | undefined
}) {
  const workspace = new Workspace({
    name,
    tree: [
      effectPackageJson,
      new Directory(
        "src",
        files.map(
          (file) =>
            new File({
              name: file.name,
              initialContent: file.initial,
              solution: file.solution
            })
        )
      )
    ]
  })
  const Editor = editor(workspace)
  return (
    <PanelGroup
      autoSaveId="tutorial"
      direction="horizontal"
      className="flex-1 flex flex-row overflow-hidden"
    >
      <Panel className="pt-4 min-w-[450px] flex flex-col" defaultSize={30}>
        {navigation}
        <div className="p-6 prose dark:prose-invert flex-1 overflow-y-auto pb-14">
          {children}
          {next && (
            <p>
              <Link href={next.url}>Next: {next.title}</Link>
            </p>
          )}
        </div>
      </Panel>
      <PanelResizeHandle />
      <Panel>
        <Editor />
      </Panel>
    </PanelGroup>
  )
}

const editor = (workspace: Workspace) =>
  dynamic(
    async () => {
      const Editor = (await import("@/CodeEditor/CodeEditor")).CodeEditor
      return () => (<Editor workspace={workspace} />) as any
    },
    { ssr: false }
  )
