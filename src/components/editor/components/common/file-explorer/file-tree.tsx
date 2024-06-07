import React, { useCallback, useMemo } from "react"
import { Array } from "effect"
import {
  Directory,
  File,
  FileTree as Tree
} from "@/workspaces/domain/workspace"
import { DirectoryNode } from "./directory-node"
import { FileNode } from "./file-node"
import { RxRef, useRxRef } from "@effect-rx/rx-react"

export function FileTree({
  tree,
  depth = 0,
  path = ""
}: {
  readonly tree: RxRef.RxRef<Tree>
  readonly depth?: number
  readonly path?: string
}) {
  const treeValue = useRxRef(tree)
  const [files, directories] = useMemo(() => {
    const refs = treeValue.map((_, index) => tree.prop(index))
    return Array.partition(
      refs as Array<RxRef.RxRef<Directory> | RxRef.RxRef<File>>,
      (ref): ref is RxRef.RxRef<Directory> => ref.value._tag === "Directory"
    )
  }, [treeValue, tree])

  const handleRemove = useCallback((node: RxRef.RxRef<File> | RxRef.RxRef<Directory>) => {
    tree.update((tree) => tree.filter((_) => _ !== node.value))
  }, [tree])

  return (
    <div className="text-sm">
      {directories.map((node) => {
        const fullPath = `${path}/${node.value.name}`
        return (
          <DirectoryNode
            key={fullPath}
            node={node}
            depth={depth}
            path={fullPath}
            onRemove={() => handleRemove(node)}
          />
        )
      })}
      {files.map((node) => {
        const fullPath = `${path}/${node.value.name}`
        return (
          <FileNode
            key={fullPath}
            type="file"
            node={node}
            depth={depth}
            path={fullPath}
            onRemove={() => handleRemove(node)}
          />
        )
      })}
    </div>
  )
}
