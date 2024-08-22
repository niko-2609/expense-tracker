import { ObjectId } from 'mongodb'

export interface User {
    user: any
    isAuthenticated: boolean
    loading: boolean
    error: string | null
}

export interface Expense {
  userId: string
  expenseName: string
  budgetId?: string | null
  categoryId: string
  transactionDate: Date
  amount: number
}

export interface Category {
  id: ObjectId
  categoryName: string
}

export interface Income {
  userId: string
  source: string
  type: string
  creditedOn: Date
  amount: number
}


export interface Budget {
  userId: string
  source: string
  type: string
  creditedOn: Date
  amount: number
}