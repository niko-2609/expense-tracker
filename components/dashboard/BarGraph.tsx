"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { usePathname } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import Link from "next/link"
const chartData = [
  { month: "Jan", expense: 186, savings: 80 },
  { month: "Feb", expense: 305, savings: 200 },
  { month: "Mar", expense: 237, savings: 120 },
  { month: "Apr", expense: 73, savings: 190 },
  { month: "May", expense: 209, savings: 130 },
  { month: "June", expense: 214, savings: 140 },
  { month: "Jul", expense: 214, savings: 140 },
  { month: "Aug", expense: 214, savings: 140 },
  { month: "Sep", expense: 214, savings: 140 },
  { month: "Oct", expense: 214, savings: 140 },
  { month: "Nov", expense: 214, savings: 140 },
  { month: "Dec", expense: 214, savings: 140 },
]

const chartConfig = {
  desktop: {
    label: "Expense",
    color: "#2563eb",
  },
  mobile: {
    label: "Savings",
    color: "hsl(340 75% 55%)",
  },
} satisfies ChartConfig

export function BarChartComponent() {
    const pathname = usePathname()
    console.log(pathname)

  return (
    <Card className="">
     <Link
       href="/dashboard/bar"
     >
     <CardHeader>
        <CardTitle>Monthly Report</CardTitle>
        <CardDescription>January - Dec 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className={pathname === "/dashboard/bar" ? 'h-[350px] w-full 2xl:h-[800px]' : 'w-full h-[180px] 2xl:h-[400px] xl:h-[150px]'}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value:any) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="expense" fill="var(--color-desktop)" radius={7} />
            <Bar dataKey="savings" fill="var(--color-mobile)" radius={7} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-1 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
     </Link>
    </Card>
  )
}
