"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export const Social = () => {
    return (
        <div className="flex gap-x-2 items-center w-full">
            <Button 
                size="lg"
                variant="outline" 
                className="w-full"   
                onClick={() => {
                    console.log("clicked google")
                }}
            >
                <FcGoogle />
            </Button>
            <Button 
                size="lg"
                variant="outline" 
                className="w-full"   
                onClick={() => {
                    console.log("clicked github")
                }}
            >
                <FaGithub />
            </Button>
        </div>
    )
}