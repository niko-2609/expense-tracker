'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Fn } from '@prisma/client/runtime/library'
import { DropDownMenu } from './Dropdown'
import ExpenseForm from './ExpenseForm'

function AddExpense(props:any) {
  const [ category, setCategory] = useState()
  const [ open, setOpen ] = useState<boolean | undefined>(undefined)
  return (
    <Dialog open={open}>
    <DialogTrigger asChild>
      <Button onClick={() => setOpen(true)}>
        + Add
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when youre done.
        </DialogDescription>
      </DialogHeader>
      <ExpenseForm handleClose={() => setOpen(false)}/>
    </DialogContent>
  </Dialog>
  )
}

export default AddExpense


