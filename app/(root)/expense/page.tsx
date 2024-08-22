'use client'

import React, { useEffect, useState } from 'react'
import AddExpenseDialog from '@/components/shared/AddExpenseDialog'
import { DataTable } from '@/components/shared/Table'
import { getExpensesByUser } from '@/actions/expenses'
import { expenseColumns } from '@/lib/types/table/colDef'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

function ExpensePage() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const user = useSelector((state:RootState) => state.user.user)

  const getData = async () => {
    try {
      const data = await getExpensesByUser(user?.user?.id);
      setExpenses(data.reverse());
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && user?.user?.id) {
    getData();
  }

  return (
    <main className="flex flex-col flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <div className='flex justify-between items-center px-1 w-full'>
        <p className='text-2xl'>Expenses</p>
        <AddExpenseDialog fetchData={() => getData()}/>
      </div>
      {!loading && <DataTable columns={expenseColumns} data={expenses} />}
      {loading && <p>Loading...</p>}
    </main>
  );
}

export default ExpensePage;