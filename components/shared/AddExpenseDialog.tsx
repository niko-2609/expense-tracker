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
import { usePathname } from 'next/navigation'

function AddExpenseDialog(props:any) {
  const [ open, setOpen ] = useState<boolean | undefined>(undefined)
  const pathname = usePathname()
   
  return (
    <Dialog open={open}>
    <DialogTrigger asChild>
      <Button onClick={() => setOpen(true)}>
        {pathname === "/budgets" ? "Add" : "+ Add"}
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogDescription>
          Add your expense data here
        </DialogDescription>
      </DialogHeader>
      <ExpenseForm handleClose={() => setOpen(false)} fetchData={() => props?.fetchData()} budgetId={props?.budgetId ? props?.budgetId : null}/>
    </DialogContent>
  </Dialog>
  ) 
}

export default AddExpenseDialog


