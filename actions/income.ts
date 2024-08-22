"use server"
import { db } from "@/lib/db/dbUtils";
import { Income } from "@/lib/types/types";
import { IncomeSchema } from "@/schema";
import { formatCurrency, formatDate } from "@/utils/expenses";
import { ObjectId } from "mongodb";
import * as z from "zod"


export const getIncomeByUser = async (id: string): Promise<any[]> => {
    try {
      const data = await db.income.findMany({
        where: {userId : id}
      });
      const updatedIncomeData = await Promise.all(
        data.map(async (item: any) => {
          return {
            ...item,
            creditedOn: formatDate(item.creditedOn),
            amount: formatCurrency(item.amount),
          };
        })
      );
      return updatedIncomeData
    } catch (error) {
      console.error("Failed to fetch income sources:", error);
      throw new Error("Could not retrieve income");
    }
  };

export const addIncome = async(values: z.infer<typeof IncomeSchema>, userId: string) => {
    // zod validation
    const validatedData = IncomeSchema.safeParse(values)
    if (validatedData?.error) {
        return {error: "Please enter valid data"}
    }

    if(!userId) return {error: "Invalid user"}

    const { source, type, amount} = validatedData.data

    const income:Income = {
        userId: new ObjectId(userId).toString(),
        source: source,
        amount: Number.parseInt(amount),
        type: type,
        creditedOn: new Date()
    }

    try{
        const newIncome = await db.income.create({
            data: income
        })
        console.log(newIncome)
        return { success: "Expense added successfully" }
    } catch (error: any){
        return {error: "Unexpected error, please try again"}
    }
}