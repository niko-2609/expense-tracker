"use client"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { Expense } from "@/lib/types/types"

const columnHelper = createColumnHelper<Expense>()

export const columns: ColumnDef<Expense>[] = [
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