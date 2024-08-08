import { auth } from "@/auth"
import Navbar from "@/components/shared/Navbar"

const AppLayout = ({children}: {children: React.ReactNode}) => {
    const session  = auth()
    return (
        <>
        <Navbar/>
        {children}
        </>
    )
}

export default AppLayout