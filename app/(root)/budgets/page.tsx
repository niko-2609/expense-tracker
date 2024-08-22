'use client'
import { getBudgetsByUser } from '@/actions/budget';
import AddBudgetDialog from '@/components/budget/AddBudgetDialog';
import BudgetItem from '@/components/budget/BudgetItem';
import { Button } from '@/components/ui/button'
import { RootState } from '@/store/rootReducer';
import React from 'react'
import { useSelector } from 'react-redux';

function BudgetsPage() {
  const [budget, setBudget] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const user = useSelector((state:RootState) => state.user.user)

  const getData = async () => {
    try {
      const data = await getBudgetsByUser(user?.user?.id);
      setBudget(data.reverse());
      console.log("Budgets...", budget)
    } catch (error) {
      console.error("Failed to fetch budgets:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && user?.user?.id) {
    getData();
  }
  return (
    <main className='flex flex-col p-4 gap-2 w-full'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>Budgets</h2>
        <div>
        <AddBudgetDialog fetchData={() => getData()} />
        </div>
      </div>
      <div className='flex flex-wrap gap-8 my-4 items-center justify-center lg:justify-normal'>
        {budget.map((item:any) => {
          return (
            <BudgetItem key={item?.id} item={item}/>
          )
        })}
      </div>
    </main>
  )
}

export default BudgetsPage
