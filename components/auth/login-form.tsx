'use client'
import * as z from 'zod'
import { LoginSchema } from '@/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from './form/form-error';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import {  login } from '@/actions/login'
import { useToast } from "@/components/ui/use-toast"
import { signInUserAction } from '@/store/actions/user';
import { useDispatch } from 'react-redux';


export default function LoginForm() {
    const dispatch = useDispatch()
    const [error, setError] = useState<string | undefined>("");
    const [pending, startTransition] = useTransition()
    const router = useRouter()
    const { toast } = useToast()

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setError("")
        startTransition(() => {
            dispatch<any>(signInUserAction(values)).then(()=>{
                toast({
                    title: "User logged in!"
                   })
            })
        })
    }

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        disabled={pending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error} />
                <Button
                    type="submit"
                    className="w-full"
                    disabled={pending}
                >
                    Sign In
                </Button>
            </form>
        </Form>
    )
}