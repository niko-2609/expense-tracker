"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Expense, Income } from "@/lib/types/types"


export const expenseColumns: ColumnDef<Expense>[] = [
  {
    accessorKey: "expenseName",
    header: "Name",
  },
  {
    accessorKey: "categoryId",
    header: "Category",
  },
  {
    accessorKey: "amount",
    header: "Amount"
  },
  {
    accessorKey: "transactionDate",
    header: "Transaction Date",
    cell: props => props.getValue()
  }
]



export const incomeColumns: ColumnDef<Income>[] = [
  {
    accessorKey: "source",
    header: "Source",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount"
  },
  {
    accessorKey: "creditedOn",
    header: "Credit Date",
    cell: props => props.getValue()
  }
]