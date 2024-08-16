"use server"


import { db } from '@/lib/db/dbUtils';
import { Expense } from '@/lib/types/types'
import { ExpenseSchema } from '@/schema';
import { formatCurrency, formatDate } from '@/utils/expenses';
import { ObjectId } from 'mongodb';
import * as z from 'zod'
import { getCategoryNameById } from './categories';


export const getExpensesByUser = async (id: string): Promise<any[]> => {
    try {
      const data = await db.expense.findMany({
        where: {userId : id}
      });
      const updatedExpenseData = await Promise.all(
        data.map(async (item: any) => {
          const categoryName = await getCategoryNameById(item.categoryId);
          return {
            ...item,
            transactionDate: formatDate(item.transactionDate),
            amount: formatCurrency(item.amount),
            categoryId: categoryName
          };
        })
      );
      return updatedExpenseData
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
      throw new Error("Could not retrieve expenses");
    }
  };


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


export const getExpensesTotalRows = async(id: string) => {
    try{
        const totalRows = await db.expense.count()
        if (!totalRows) {
            return { error: "Cannot fetch data for pagination"}
        }
        return totalRows
    } catch(error:any) {
        return {error: "Something went wrong, Please try again "}
    }
}