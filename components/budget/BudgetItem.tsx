import React from 'react'
import { Progress } from '../ui/progress'

function BudgetItem({item}: any) {
  return (
    <div className='flex w-full lg:min-w-[270px] lg:max-w-fit flex-col shadow-lg rounded-md px-6 py-4 gap-4 bg-gray-200'>
      <div className='flex justify-between gap-4 items-center'>
        <p className='text-lg'>{item?.budgetName}</p>
        <p className='text-lg'>Rs.600/{item?.amountAllocated}</p>
      </div>
      <div>
        <Progress value={66}/>
      </div>
    </div>
  )
}

export default BudgetItem
