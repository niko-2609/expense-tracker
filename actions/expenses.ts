"use server"


import { db } from '@/lib/db/dbUtils';
import { Expense } from '@/lib/types/types'
import { ExpenseSchema } from '@/schema';
import { formatCurrency, formatDate } from '@/utils/expenses';
import { ObjectId } from 'mongodb';
import * as z from 'zod'
import { getCategoryNameById } from './categories';
import { updateAmountSpent } from './budget';


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

export const addExpense = async (values: z.infer<typeof ExpenseSchema>, userId: any, budgetId?: any): Promise<any> => {
    // check for user inputs using zod validation, the interface must move to Zod schemas
    const validatedFields = ExpenseSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: "Please enter valid data" }
    }

    const { expenseName, category, amount } = validatedFields.data;
    
    if (!userId) {
        return { error: "Invalid user" };
    }


    const expense: Expense = {
        userId: new ObjectId(userId).toString(),
        expenseName: expenseName,
        categoryId: new ObjectId(category).toString(),
        transactionDate: new Date(),
        amount: Number.parseInt(amount),
        budgetId: budgetId ? new ObjectId(budgetId).toString() : null
    }

    const newExpense = await db.expense.create({
        data: expense
    })

    await updateAmountSpent(newExpense?.budgetId, newExpense?.amount, userId)

    return { success: "Expense added successfully" }
}


export const fetchExpensesByBudget = async(userId:string, budgetId: string ) => {
    try {const expensesByBudget = await db.expense.findMany({
      where:{
        userId: userId,
        budgetId: budgetId
      }
    })
    const expensesByBudgetList = await Promise.all(
      expensesByBudget.map(async (item:any) => {
        const categoryName = await getCategoryNameById(item.categoryId);
        return {
          ...item,
          transactionDate: formatDate(item.transactionDate),
          amount: formatCurrency(item.amount),
          categoryId: categoryName
        };
      })
    )
    return expensesByBudgetList;
  } catch (error) {
    console.error("Failed to fetch expenses for the selected budget:", error);
    throw new Error("Could not retrieve expenses by budgets");
  }
}