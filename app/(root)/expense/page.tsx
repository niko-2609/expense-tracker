'use client'

import React, { useEffect, useState } from 'react'
import AddExpense from '@/components/shared/AddDialog'
import { DataTable } from '@/components/shared/Table'
import { getExpenses } from '@/actions/expenses'
import { columns } from '@/lib/types/table/colDef'
import { formatCurrency, formatDate } from '@/utils/expenses'
import { getCategoryNameById } from '@/actions/categories'



function ExpensePage() {


  const [expenses, setExpenses] = useState<any>([]);


  useEffect(() => {
    const getData = async() => {
      const data = await getExpenses()
      const updatedExpenseData = await Promise.all(
        data.map(async (item: any) => {
          const categoryName = await getCategoryNameById(item.categoryId);
          return {
            ...item,
            transactionDate: formatDate(item.transactionDate),
            amount: formatCurrency(item.amount),
            categoryId: categoryName // or any other relevant field if needed
          };
        })
      );
      setExpenses(updatedExpenseData);
    }

    getData()
  }, [expenses])

  return (
    <main className="flex flex-col flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <div className='flex justify-between items-center px-4 w-full'>
        <p className='text-2xl'>Expenses</p>
        <AddExpense />
      </div>
      <DataTable columns={columns} data={expenses} />
    </main>
  )
}


export default ExpensePage