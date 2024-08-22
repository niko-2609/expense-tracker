'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ExpenseForm from './ExpenseForm'

function AddExpenseDialog(props:any) {
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
        <DialogTitle>Add Expense</DialogTitle>
        <DialogDescription>
          Add your expense data here
        </DialogDescription>
      </DialogHeader>
      <ExpenseForm handleClose={() => setOpen(false)} fetchData={() => props?.fetchData()}/>
    </DialogContent>
  </Dialog>
  ) 
}

export default AddExpenseDialog


