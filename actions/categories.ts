;'use server'
import { db } from "@/lib/db/dbUtils";
import { Category } from "@/lib/types/types";
import { ObjectId } from "mongodb";

export const getCategories =  async (): Promise<any> => {
   const result =  await db.category.findMany()
   return result
}

export const getCategoryNameById = async (id: string): Promise<string | null> => {
    try {
        // Ensure the ID is a valid format if needed (e.g., a valid UUID)
        if (!id) {
            throw new Error("ID is required");
        }

        const category = await db.category.findUnique({
            where: {id}
        });

        if (!category) {
            console.log(`Category with ID ${id} not found`);
            return null;
        }
        return category.categoryName; // Assuming category has a `name` field

    } catch (error:any) {
        console.error(`Error fetching category: ${error.message}`);
        throw error;
    }
};