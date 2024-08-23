'use client'
import React, { useEffect, useTransition } from 'react'
import * as z from 'zod'
import { IncomeSchema } from '@/schema';
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
import { getCategories } from '@/actions/categories';
import { toast } from '../ui/use-toast'
import { addIncome } from '@/actions/income';

function IncomeForm({ handleClose, fetchIncome }: any) {
    const user = useSelector((state: RootState) => state.user.user)
    const [pending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof IncomeSchema>>({
        resolver: zodResolver(IncomeSchema),
        defaultValues: {
            source: "",
            type: "",
            amount: "",
        }
    })


    const onSubmit = async (values: z.infer<typeof IncomeSchema>) => {
        console.log(values)
        startTransition(() => {
            try {
                addIncome(values, user?.user?.id).then((data:any) => {
                    if(data?.error){
                        console.log(data?.error)
                        return
                    }
                    fetchIncome().then(() => {
                        toast({
                            title: "Income added",
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
                        name="source"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel>Source</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="string"
                                        placeholder='Name of the income source'

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Type
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        disabled={pending}
                                        placeholder='Enter type of income (Ex: Monthly, Biweekly)'
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
                        Add
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default IncomeForm
