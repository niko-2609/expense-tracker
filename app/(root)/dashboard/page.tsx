// import React from 'react'

// function Dashboard() {
//   return (
//     <div>
//       Dashboard
//     </div>
//   )
// }

// export default Dashboard


'use client'
import Sidebar from '@/components/shared/Sidebar'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Header from '@/components/shared/Header'
import StatCardWrapper from '@/components/dashboard/CardWrapper'
import { BarChartComponent } from '@/components/dashboard/BarGraph'
import { PieChartComponent } from '@/components/dashboard/PieChart'

const Dashboard = () => {
  return (
    <main className="flex flex-col flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <div className="flex justifiy-center flex-col gap-2 md:gap-2">
        <h1 className="text-lg font-semibold font-sans md:text-2xl">Hi Nikolai 👋</h1>
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
      <div className='flex flex-col gap-2 w-full lg:justify-between xl:justify-between 2xl:gap-20 2xl:mt-20 lg:flex-row lg:gap-0 mt-1'>
      <div className="flex flex-col lg:w-[400px] xl:w-[520px] 2xl:w-[900px] 2xl:mr-20 xl:mr-3">
        <BarChartComponent />
      </div>
      <div className='flex w-full lg:w-[400px] xl:w-[380px]'>
        <PieChartComponent />
      </div>
      </div>
    </main>
  )
}


export default Dashboard;