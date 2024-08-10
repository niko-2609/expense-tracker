import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Info from './Info'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center border-b bg-background px-4 md:px-6 justify-between">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 lg:px-8"
        >
          <Image src={"/chart-donut.svg"} alt="" width={24} height={24} />
          <span className="text-xl font-bold">Expenzo</span>
        </Link>
      </nav>
      <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link
                  href="/expense"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Expenses
                </Link>
                <Link
                  href="/income"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Income
                </Link>
                <Link
                  href="/budgets"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Budgets
                </Link>
                <Link
                  href="/assist"
                  className="text-muted-foreground hover:text-foreground"
                >
                  AI Advisor
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
      <div className="">
        <div className="ml-auto flex">
     
        </div>

      </div>
    </header>

  )
}

export default Navbar
