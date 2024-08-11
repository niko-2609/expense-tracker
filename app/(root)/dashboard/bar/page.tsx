'use client'
import { BarChartComponent } from '@/components/dashboard/BarGraph'
import { Button } from '@/components/ui/button'
import React from 'react'
import {
   ChevronLeft
  } from "lucide-react"
import { useRouter } from 'next/navigation'

function BarChartPage() {
    const router = useRouter()
  return (
    <>
    <div>
        <Button onClick={() => router.back()}>
            <ChevronLeft />
            Back
        </Button>
    </div>
    <div className=''>
    <BarChartComponent />
    </div>
    </>
  )
}

export default BarChartPage
