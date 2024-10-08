'use client'
import React, { useEffect, useTransition } from 'react'
import * as z from 'zod'
import { ExpenseSchema, LoginSchema } from '@/schema';
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
import { FormError } from '../auth/form/form-error';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { addExpense } from '@/actions/expenses';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getCategories } from '@/actions/categories';
import { toast } from '../ui/use-toast'

function ExpenseForm(props: any) {
    const [position, setPosition] = React.useState("lifestyle")
    const user = useSelector((state: RootState) => state.user.user)
    const [pending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof ExpenseSchema>>({
        resolver: zodResolver(ExpenseSchema),
        defaultValues: {
            expenseName: "",
            category: "",
            amount: "",
        }
    })

    const [selectedCat, setSelectedCat] = React.useState<any>({})
    const [categories, setCategories] = React.useState<any>([])
    const fetchCategories = async () => {
        const categoryList = await getCategories()
        setCategories(categoryList)
    }
    useEffect(() => {
        fetchCategories()
        return () => {
            setCategories([])
            setSelectedCat({})
        }
    }, [])


    const onSubmit = async (values: z.infer<typeof ExpenseSchema>) => {
        console.log(values)
        startTransition(() => {
            try {
                const budgetIdToPass = props?.budgetId ? props?.budgetId : null
                addExpense(values, user?.user?.id, budgetIdToPass).then((data) => {
                    if (data.error) {
                        return
                    }
                        props?.fetchData().then(() => {
                            toast({
                                title: props?.toastMessage,
                                duration: 3000,
                            })
                        })
                })
                props?.handleClose()
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
                        name="expenseName"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel>Expense</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="string"
                                        placeholder='Name of the expense'

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Category</FormLabel>
                                <FormControl>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild className="w-fit">
                                            <Button variant="outline">{selectedCat && Object.keys(selectedCat).length !== 0 ? selectedCat.categoryName : "Select a category"}</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56">
                                            <DropdownMenuLabel>Category</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuRadioGroup value={position} onValueChange={(value: any) => {

                                                setSelectedCat(value)
                                                field.onChange(value.id)
                                                console.log(field)
                                            }}>
                                                {categories.map((item: any) => {
                                                    return <DropdownMenuRadioItem key={item.id} value={item}>{item.categoryName}</DropdownMenuRadioItem>
                                                })}
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
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
                            props?.handleClose()
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
                        Add expense
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default ExpenseForm
