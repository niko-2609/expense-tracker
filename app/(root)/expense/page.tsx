'use server'
import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AddDialog from '@/components/shared/AddDialog'
import { Table } from '@/components/ui/table'
import { TableList } from '@/components/shared/Table'

function ExpensePage() {

  

  // TODO On successully adding the expense, this component should re-render and fetch the latest expenses.
  let rowData = [
    { id: 1, name: "Zomato sat dinner", category: "Food", amount: "Rs. 435.60" , date: "Sep 29, 2024"},
    { id: 2, name: "Protein powder", category: "Health and Lifestyle", amount: "Rs. 6884" ,date: "Apr 11,2024" },
    { id: 3, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
    { id: 4, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
    { id: 5, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
    { id: 6, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
    { id: 7, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
    { id: 8, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
    { id: 9, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
    { id: 10, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
  ]

  const addExpense = () => {
      rowData.push(
        { id: 11, name: "Prime subscription", category: "Entertainment", amount: "Rs. 1500", date: "Mar 2,2023" },
      )
  }
  return (
    <div className=' h-full w-full p-2'>
      <div className='flex justify-between items-center'>
        <p className='text-2xl'>Expenses</p>
        <AddDialog />
      </div>
      <div className='flex flex-1 h-[600px] mt-6 rounded-lg'> 
        < TableList rowData={rowData}/>
      </div>
    </div>
  )
}

export default ExpensePage