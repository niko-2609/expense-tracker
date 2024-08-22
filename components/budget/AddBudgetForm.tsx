'use client'
import React, { useTransition } from 'react'
import * as z from 'zod'
import { BudgetSchema } from '@/schema';
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
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { toast } from '../ui/use-toast'
import { addBudget } from '@/actions/budget';

function BudgetForm({ handleClose, fetchBudget }: any) {
    const user = useSelector((state: RootState) => state.user.user)
    const [pending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof BudgetSchema>>({
        resolver: zodResolver(BudgetSchema),
        defaultValues: {
            budgetName: "",
            amount: "",
            description: ""
        }
    })


    const onSubmit = async (values: z.infer<typeof BudgetSchema>) => {
        startTransition(() => {
            try {
                addBudget(values, user?.user?.id).then((data:any) => {
                    if(data?.error){
                        console.log(data?.error)
                        return
                    }
                    fetchBudget().then(() => {
                        toast({
                            title: data?.success,
                            duration: 3500
                        })
                    })
                })
                handleClose()
            } catch (error: any) {
                throw new Error(error)
            }
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <div className="space-y-4 flex flex-col">
                    <FormField
                        control={form.control}
                        name="budgetName"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="string"
                                        placeholder='What should we call this budget?'

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        disabled={pending}
                                        placeholder='What is this budget for?'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        disabled={pending}
                                        placeholder='Enter amount in number'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex justify-between w-full'>
                    <Button
                        onClick={(event: any) => {
                            event.preventDefault()
                            handleClose()
                        }}
                        className=""
                        disabled={pending}
                        type='button'
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className=""
                        disabled={pending}
                    >
                        Add Budget
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default BudgetForm
