'use client'

import { getIncomeByUser } from '@/actions/income';
import { BarChartComponent } from '@/components/dashboard/BarGraph';
import { PieChartComponent } from '@/components/dashboard/PieChart';
import AddIncomeDialog from '@/components/income/AddIncomeDialog'
import { DataTable } from '@/components/shared/Table';
import { Button } from '@/components/ui/button'
import { incomeColumns } from '@/lib/types/table/colDef';
import { RootState } from '@/store/rootReducer';
import React from 'react'
import { useSelector } from 'react-redux';

function IncomePage() {
  const [income, setIncome] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const user = useSelector((state:RootState) => state.user.user)

  const getData = async () => {
    try {
      const data = await getIncomeByUser(user?.user?.id);
      setIncome(data.reverse());
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
      <div className='flex items-center justify-between w-full'>
        <p className='text-xl'>Top Sources</p>
        <AddIncomeDialog fetchData={() => getData()} />
      </div>
      {!loading && <DataTable columns={incomeColumns} data={income} />}
      {loading && <p>Loading...</p>}
      <div className=' gap-2 lg:gap-0 lg:flex-row flex-col flex w-full 2xl:justify-between xl:mt-4'>
        <div className='lg:w-[400px] xl:w-[600px] 2xl:w-[1500px]'>
          <BarChartComponent />
        </div>
        <div className='flex w-full lg:w-[400px] xl:w-[380px] 2xl:w-[500px]'>
          <PieChartComponent />
        </div>
      </div>
    </main>
  )
}

export default IncomePage
