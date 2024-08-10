'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { logout } from '@/actions/logout'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { signOutUserAction } from '@/store/actions/user'
import { toast } from '../ui/use-toast'



function Info() {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    console.log(isAuthenticated)
    const userSignout = async () => {
        dispatch<any>(signOutUserAction()).then(()=>{
            toast({
                title: "Logged out!"
               })
        })
    }
    return (
        <>
            {isAuthenticated ? (
                <Button
                    variant="secondary"
                    className='rounded-full h-2 w-2'
                    onClick={userSignout}
                >
                    SignOut
                </Button>
            ) : (

                <Link
                    href="/sign-up"
                >
                    <Button variant="secondary">
                        Get started!
                    </Button>
                </Link>
            )}
        </>
    )
}

export default Info
