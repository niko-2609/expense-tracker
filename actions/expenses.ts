"use server"


import { db } from '@/lib/db/dbUtils';
import { Expense } from '@/lib/types/types'
import { ExpenseSchema } from '@/schema';
import { formatCurrency, formatDate } from '@/utils/expenses';
import { ObjectId } from 'mongodb';
import * as z from 'zod'
import { getCategoryNameById } from './categories';


export const getExpenses = async (): Promise<any[]> => {
    const data = await db.expense.findMany()   
    return data
}


export const addExpense = async (values: z.infer<typeof ExpenseSchema>, userId: any): Promise<any> => {
    // check for user inputs using zod validation, the interface must move to Zod schemas

    const validatedFields = ExpenseSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: "Unexpected data received, please try again" }
    }

    const { expenseName, category, amount } = validatedFields.data;
    
    if (!userId) {
        return { error: "User ID is required" };
    }


    const expense: Expense = {
        userId: new ObjectId(userId).toString(),
        expenseName: expenseName,
        categoryId: new ObjectId(category).toString(),
        transactionDate: new Date(),
        amount: Number.parseInt(amount)
    }

    const newExpense = await db.expense.create({
        data: expense
    })

    // await db.category.update({
    //     where: {
    //         id: new ObjectId(category).toString(),
    //     },
    //     data: {
    //         expenses: {
    //             create:
    //             {
    //                 id: newExpense.id,
    //                 userId: new Object(userId).toString(),
    //             }
    //         }
    //     }
    // })

    return { success: "Expense added successfully" }
}


