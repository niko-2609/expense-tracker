import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Header from '@/components/auth/header'
import { BackButton } from "@/components/auth/back-button"
import { Social } from "@/components/auth/social"
interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean,
    title: string
}


export const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial, title }: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} cardTitle={title}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            
            )}
            <CardFooter>
                <BackButton
                    href={backButtonHref}
                    label={backButtonLabel}    
                />
            </CardFooter>
        </Card>
    )
}