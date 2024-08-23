import React, { useState } from 'react'
import { Progress } from '../ui/progress'
import AddExpenseDialog from '../shared/AddExpenseDialog'
import BudgetDetailDialog from './BudgetDetailDialog'

function BudgetItem(props: any) {
  let exceeded = false
  if (props?.item?.amountSpent > props?.item?.amountAllocated) {
    exceeded = true
  }
  return (
    <div className='flex w-full lg:min-w-[270px] lg:max-w-fit flex-col shadow-lg rounded-md px-6 py-4 gap-4 bg-gray-200'>
      <div className='flex justify-between gap-4 items-center'>
        <p className='text-lg'>{props?.item?.budgetName}</p>
        <p className="text-lg"><span className={`${exceeded ? "text-destructive" : null}`}>{props?.item?.amountSpent}</span>/{props?.item?.amountAllocated}</p>
      </div>
      <div>
        <Progress value={props?.spentPerc}/>
      </div>
      <div className='flex justify-between'>
        <AddExpenseDialog budgetId={props?.item?.id} fetchData={props?.fetchData} />
        <BudgetDetailDialog budgetId={props?.item?.id}/>
      </div>
    </div>
  )
}

export default BudgetItem
