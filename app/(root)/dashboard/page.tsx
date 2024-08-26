'use client'
import React, { useEffect, useState } from 'react'
import StatCardWrapper from '@/components/dashboard/CardWrapper'
import { BarChartComponent } from '@/components/dashboard/BarGraph'
import { PieChartComponent } from '@/components/dashboard/PieChart'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootReducer'
import { getDashboardData } from '@/actions/dashboard'

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const userName:string = user?.user?.name
  const [ dashboardData, setDashboardData] = useState<any>([])
  const [ loading, setLoading ] = useState<any>(true)

  const getData = async () => {
    try {
      const data = await getDashboardData(user?.user?.id);
      console.log("DATA FOR DASHBOARD", data)
      setDashboardData(data);
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && user?.user?.id) {
    getData();
  }

  useEffect(() => {
    console.log("DASHBOARD DATA: ", dashboardData)
  }, [dashboardData])
  return (
    <main className="flex flex-col flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <div className="flex justifiy-center flex-col gap-2 md:gap-2">
        <h1 className="text-lg font-semibold font-sans md:text-2xl">Hi {userName.split(" ")[0]} 👋</h1>
        <p className="font-sans md:text-md text-gray-600">Heres how your finance health looks like</p>
      </div>
      <div className='flex gap-2 w-full md:flex-row flex-col 2xl:gap-20'>
         <div className='flex gap-2 justify-around sm:justify-around lg:justify-normal 2xl:gap-20'>
         <StatCardWrapper  />
         <StatCardWrapper  />
         </div>
          <div className='flex gap-2 justify-around sm:justify-around lg:justify-normal 2xl:gap-20'>
          <StatCardWrapper  />
          <StatCardWrapper  />
          </div>
      </div>
      <div className='flex flex-col gap-2 w-full lg:justify-between xl:justify-between 2xl:justify-normal 2xl:gap-20 2xl:mt-20 lg:flex-row lg:gap-0 mt-1'>
      <div className="flex flex-col lg:w-[400px] xl:w-[520px] 2xl:w-[900px] xl:mr-3 2xl:mr-10">
        <BarChartComponent data={dashboardData}/>
      </div>
      <div className='flex w-full lg:w-[400px] xl:w-[380px]'>
        <PieChartComponent />
      </div>
      </div>
    </main>
  )
}


export default Dashboard;