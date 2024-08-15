"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropDownMenu(props:any) {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-fit">
        <Button variant="outline">Select category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="lifestyle">Lifestyle</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="entertainment">Entertainment</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fnb">Food & Beverages</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="education">Education</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="health">Health</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
