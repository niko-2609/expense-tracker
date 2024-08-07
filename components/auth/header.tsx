import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface HeaderProps {
    label: string
    cardTitle: string
}

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

export default function Header({ label, cardTitle }: HeaderProps) {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center">
            <div className="flex gap-x-2 items-center">
                <Image src={`/chart-donut.svg`} alt="" width={40} height={40} />
                <h1 className={cn("text-3xl font-semibold", font.className)}>
                    Expenzo
                </h1>
            </div>
            <h3 className={cn("text-xl font-semibold mt-4", font.className)}>
                {cardTitle}
            </h3>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}