import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Badge } from "@/components/ui/badge"
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
import Link from 'next/link'
import { Button } from '../ui/button'
import Header from './Header'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:flex">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image src={`/chart-donut.svg`} alt="404" width={28} height={28} />
                <span className="text-2xl">Expenzo</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  <p className='text-lg'>Dashboard</p>
                </Link>
                <Link
                  href="/expense"
                  className="flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <p className='text-lg'>Expense</p>
                </Link>
                <Link
                  href="/income"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-4 text-primary transition-all hover:text-primary"
                >
                  <Package className="h-4 w-4" />
                  <p className='text-lg'>Income</p>
                </Link>
                <Link
                  href="/budgets"
                  className="flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  <p className='text-lg'>Budgets</p>
                </Link>
                <Link
                  href="/assist"
                  className="flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-5 w-5" />
                  <p className='text-lg'>AI Advisor</p>
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
    </div>
  )
}

export default Sidebar
