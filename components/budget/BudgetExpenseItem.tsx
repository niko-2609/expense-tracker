import React from 'react'

function BudgetExpenseItem(props: any) {
  return (
    <div className='flex justify-between'>
      <p className='font-bold capitalize '>
        {props?.name}
      </p>
      <p className=''>
        {props?.amount}
      </p>
    </div>
  )
}

export default BudgetExpenseItem
