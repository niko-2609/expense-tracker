'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import BudgetExpenseItem from './BudgetExpenseItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootReducer'
import { fetchExpensesByBudget } from '@/actions/expenses'
import { Cross2Icon } from "@radix-ui/react-icons"

function BudgetDetailDialog(props: any) {
    const [open, setOpen] = useState<boolean | undefined>(undefined)
    const [expensesByBudget, setExpensesByBudget] = useState<any>([])
    const [loading, setLoading] = useState<any>(false)
    const user = useSelector((state: RootState) => state.user.user)


    const getData = async () => {
        try {
            setLoading(true)
            const data = await fetchExpensesByBudget(user?.user?.id, props?.budgetId);
            setExpensesByBudget(data.reverse());
        } catch (error) {
            console.error("Failed to fetch expenses for given budget:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button onClick={() => {
                    setOpen(true)
                    getData()
                }}>
                    View
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className='flex justify-between'>
                    <DialogTitle>Budget details</DialogTitle>
                    <Cross2Icon className="h-4 w-4 hover:cursor-pointer" onClick={() => setOpen(false)}/>
                    </div>
                    <DialogDescription>
                        All expenses that are part of this budget
                    </DialogDescription>
                </DialogHeader>
                {!loading && expensesByBudget.length != 0 && expensesByBudget.map((item: any) => (
                    <BudgetExpenseItem key={item?.id} name={item?.expenseName} amount={item?.amount} />
                ))}
                {!loading && expensesByBudget.length === 0 && <p className='font-semibold flex justify-center p-4'>No items to show</p>}
                {loading && <p>Fetching data, please wait...</p>}
            </DialogContent>
        </Dialog>
    )
}

export default BudgetDetailDialog
