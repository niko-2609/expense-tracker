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
import CardWrapper from '@/components/dashboard/CardWrapper'

const Dashboard = () => {
  return (
    <>
      <div className="flex justifiy-center flex-col gap-2 md:gap-4">
        <h1 className="text-lg font-semibold font-sans md:text-2xl">Hi Nikolai 👋</h1>
        <p className="font-sans md:text-lg">Heres how your finance health looks like</p>
      </div>
      <div className='flex gap-4 flex-col lg:flex-row w-full 2xl:justify-between my-4'>
         <div className='flex gap-2 justify-around sm:justify-around lg:justify-normal'>
         <CardWrapper />
         <CardWrapper />
         </div>
          <div className='flex gap-2 justify-around sm:justify-around lg:justify-normal'>
          <CardWrapper />
          <CardWrapper />
          </div>
      </div>
    </>
  )
}


export default Dashboard;