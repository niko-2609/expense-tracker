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
import BudgetForm from './AddBudgetForm'

function AddBudgetDialog(props:any) {
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
        <DialogTitle>Add Budget</DialogTitle>
        <DialogDescription>
          Add info about your budget
        </DialogDescription>
      </DialogHeader>
      <BudgetForm handleClose={() => setOpen(false)} fetchBudget={() => props?.fetchData()}/>
    </DialogContent>
  </Dialog>
  ) 
}

export default AddBudgetDialog


