import React from "react"
import { WorkspaceHandle } from "./rx"
import { useRxSet, useRxValue } from "@effect-rx/rx-react"

export const WorkspaceContext = React.createContext<WorkspaceHandle>(
  null as any
)

export const useWorkspaceHandle = () => React.useContext(WorkspaceContext)

export const useWorkspaceRx = () => useWorkspaceHandle().workspace

export const useWorkspace = () => useRxValue(useWorkspaceRx())
export const useSetWorkspace = () => useRxSet(useWorkspaceRx())

export const useWorkspaceShells = () =>
  useRxValue(useWorkspaceRx(), (workspace) => workspace.shells)

export const useWorkspaceTree = () =>
  useRxValue(useWorkspaceRx(), (workspace) => workspace.tree)
