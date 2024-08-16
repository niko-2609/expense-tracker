import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Image from "next/image"

interface CardWrapperProps {
    title: string,
    changePercent: number,
    icon: string,


}

function StatCardWrapper() {
    return (
        <div className="flex rounded-lg max-w-fit sm:p-2 shadow-lg lg:gap-8 2xl:gap-20 bg-gray-100 gap-2">
           <div className="flex flex-1">
           <div className="p-1 md:p-2 flex flex-col">
                <p className="text-md text-slate-700 font-semibold mb-2">Budgets</p>
                <p className="xl:text-5xl lg:text-4xl text-3xl font-sans font-semibold text-slate-700">$24k</p>
                <p className="text-sm mt-2">🔻12% since last month</p>
            </div>
           </div>
            <div className="flex mt-0">
                <Image src="./budgets.svg" alt="expense budgets not found" width={52} height={52} />
            </div>
        </div>
    )
}

export default StatCardWrapper