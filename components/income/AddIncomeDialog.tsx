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
import IncomeForm from '@/components/income/AddIncomeForm'

function AddIncomeDialog(props:any) {
  const [ open, setOpen ] = useState<boolean | undefined>(undefined)
  return (
    <Dialog open={open}>
    <DialogTrigger asChild>
      <Button onClick={() => setOpen(true)}>
        + Add Income
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Income</DialogTitle>
        <DialogDescription>
          Add data about your income
        </DialogDescription>
      </DialogHeader>
      <IncomeForm handleClose={() => setOpen(false)} fetchIncome={() => props?.fetchData()}/>
    </DialogContent>
  </Dialog>
  ) 
}

export default AddIncomeDialog


