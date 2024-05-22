"use client"

import React from "react"
import Link from "next/link"
import { TutorialGroup } from "@/app/tutorials/grouped"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Tutorial } from "contentlayer/generated"

export declare namespace MenuGroup {
  export interface Props {
    readonly group: TutorialGroup
    readonly selected: Tutorial
  }
}

export const MenuGroup: React.FC<MenuGroup.Props> = ({ group, selected }) => {
  return (
    <AccordionItem value={group.index._id}>
      <AccordionTrigger className="py-2">
        <h4 className="flex items-center pb-1 text-base font-display">
          {group.index.section}
        </h4>
      </AccordionTrigger>
      <AccordionContent className="pb-2">
        <div className="pl-4 text-sm leading-loose">
          {group.children.map((tutorial) => (
            <div key={tutorial._id}>
              <Link
                href={tutorial.urlPath}
                className={cn(
                  "hover:underline",
                  tutorial._id === selected._id && "font-medium"
                )}
              >
                {tutorial.title}
              </Link>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
