'use server'

"use server"
import { db } from "@/lib/db/dbUtils";
import { BudgetSchema } from "@/schema";
import { formatCurrency, formatDate } from "@/utils/expenses";
import { ObjectId } from "mongodb";
import * as z from "zod"


export const getBudgetsByUser = async (id: string): Promise<any[]> => {
    try {
      const data = await db.budget.findMany({
        where: {userId : id}
      });
      const updatedIncomeData = await Promise.all(
        data.map(async (item: any) => {
          return {
            ...item,
            createdOn: formatDate(item.createdOn),
          };
        })
      );
      return updatedIncomeData
    } catch (error) {
      console.error("Failed to fetch income sources:", error);
      throw new Error("Could not retrieve income");
    }
  };

export const addBudget = async(values: z.infer<typeof BudgetSchema>, userId: string) => {
    // zod validation
    const validatedData = BudgetSchema.safeParse(values)
    if (validatedData?.error) {
        return {error: "Please enter valid data"}
    }

    if(!userId) return {error: "Invalid user"}

    const { budgetName, description, amount} = validatedData.data

    const budget = {
        userId: new ObjectId(userId).toString(),
        budgetName: budgetName,
        createdOn: new Date(),
        amountAllocated: Number.parseInt(amount),
        amountSpent: 0
    }

    try{
        const newBudget = await db.budget.create({
            data: budget
        })
        console.log(newBudget)
        return { success: "Budget added successfully" }
    } catch (error: any){
      console.log(error)
        return {error: "Unexpected error, please try again"}
    }
}