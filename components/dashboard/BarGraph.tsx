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

const chartConfig = {
  expense: {
    label: "Expense",
    color: "#2563eb",
  },
  savings: {
    label: "Savings",
    color: "hsl(340 75% 55%)",
  },
} satisfies ChartConfig

export function BarChartComponent(props:any) {
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
        <ChartContainer config={chartConfig} className={pathname === "/dashboard/bar" ? 'h-[350px] w-full 2xl:h-[800px]' : 'w-full h-[170px] 2xl:h-[600px] xl:h-[190px]'}>
          <BarChart accessibilityLayer data={props?.data}>
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
            <Bar dataKey="expense" fill="var(--color-expense)" radius={5} />
            <Bar dataKey="savings" fill="var(--color-savings)" radius={3} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-1 font-medium leading-none">
          Expenses up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing data for this year
        </div>
      </CardFooter>
     </Link>
    </Card>
  )
}
