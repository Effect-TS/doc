import React from "react"
import type { Icon } from "@/components/icons"
import { cn } from "@/lib/utils"

export const ClipboardIcon: React.FC<Icon.CommonProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={cn("fill-current", className)}
    >
      <path d="M192 32c-22.3 0-41.2 15.3-46.5 36c-1.8 7.1-8.2 12-15.5 12H112c-8.8 0-16 7.2-16 16v32h96 96V96c0-8.8-7.2-16-16-16H254c-7.3 0-13.7-4.9-15.5-12c-5.3-20.7-24.1-36-46.5-36zM118.7 48C131 19.8 159.2 0 192 0s61 19.8 73.3 48H272c20.9 0 38.7 13.4 45.3 32H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V144c0-35.3 28.7-64 64-64h2.7C73.3 61.4 91.1 48 112 48h6.7zM320 128c0 17.7-14.3 32-32 32H192 96c-17.7 0-32-14.3-32-32V112c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32v16zM192 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </svg>
  )
}
