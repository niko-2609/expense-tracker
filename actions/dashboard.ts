'use server'

import { db } from '@/lib/db/dbUtils';
import { ObjectId } from 'mongodb';

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

export async function getDashboardData(userId: string) {

    // Get current month and starting of month
    const currentDate = new Date()
    const currentYear = new Date().getFullYear();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Get 
    const allMonths = Array.from({ length: 12 }, (_, i) => ({
        year: currentYear,
        month: i + 1,
        totalIncome: 0,
        totalExpense: 0,
      }));

    const incomes = await db.income.findMany({
        where: {
            userId: userId,
            creditedOn: {
                gte: new Date(currentYear, 0, 1),
                lte: new Date()
            }
        },
        select: {
            amount: true,
            creditedOn: true
        },
        orderBy: {
            creditedOn: 'asc'
        }
    });
    const expenses = await db.expense.findMany({
        where: {
            userId: userId,
            transactionDate: {
                gte: new Date(currentYear, 0, 1),
                lte: new Date()
            }
        },
        select: {
            amount: true,
            transactionDate: true
        },
        orderBy: {
            transactionDate: 'asc'
        }
    });
    const monthlyIncomes = incomes.reduce((acc: any, income: any) => {
        const month = income.creditedOn.getMonth() + 1; // getMonth() is 0-indexed, so add 1
        const year = income.creditedOn.getFullYear();
        const key = `${year}-${month.toString().padStart(2, '0')}`;

        if (!acc[key]) {
            acc[key] = {
                year,
                month,
                totalIncome: 0
            };
        }

        acc[key].totalIncome += income.amount;
        return acc;
    }, {});

    const monthlyExpenses = expenses.reduce((acc: any, expense: any) => {
        const month = expense.transactionDate.getMonth() + 1; // getMonth() is 0-indexed, so add 1
        const year = expense.transactionDate.getFullYear();
        const key = `${year}-${month.toString().padStart(2, '0')}`;

        if (!acc[key]) {
            acc[key] = {
                year,
                month,
                totalExpense: 0
            };
        }

        acc[key].totalExpense += expense.amount;
        return acc;
    }, {});

 // Convert the grouped data to an array
const incomeResultArr  = Object.values(monthlyIncomes);
const expenseResultArr = Object.values(monthlyExpenses)

// Merge with the list of all months
const result = allMonths.map(month => {
  const incomeKey = `${month.year}-${month.month.toString().padStart(2, '0')}`;
  const incomeData:any = incomeResultArr.find((r:any) => `${r.year}-${r.month.toString().padStart(2, '0')}` === incomeKey);
  const expenseKey = `${month.year}-${month.month.toString().padStart(2, '0')}`;
  const expenseData:any = expenseResultArr.find((r:any) => `${r.year}-${r.month.toString().padStart(2, '0')}` === expenseKey);
  return {
    ...month,
    totalIncome: incomeData ? incomeData.totalIncome : 0,
    totalExpense: expenseData ? expenseData.totalExpense : 0
  };
}).sort((a, b) => {
  if (a.year === b.year) {
    return a.month - b.month;
  }
  return a.year - b.year;
});


  
  const dashboardOutput = result.map(item => ({
    month: monthNames[item.month - 1],
    expense: item.totalExpense,
    savings: item.totalIncome - item.totalExpense
  }));
  
  console.log(dashboardOutput);
  return dashboardOutput
}

