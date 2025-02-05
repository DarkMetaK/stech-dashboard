import { api } from '@/libs/axios'
import { useEffect, useState } from 'react'

interface Transaction {
  id: number
  name: string
  type: 'income' | 'outcome'
  price: number
  amount: number
  createdAt: string
}

interface Transactions {
  [date: string]: Transaction[]
}

export function useSummary() {
  const [transactions, setTransactions] = useState<Transactions>({})

  useEffect(() => {
    async function loadTransactions() {
      try {
        const response = await api.get<Transactions>('/transactions')

        setTransactions(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    loadTransactions()
  })

  const allTransactions = Object.values(transactions).flat()

  const totalIncome = allTransactions
    .filter((item) => item.type === 'income')
    .reduce((acc, item) => {
      return (acc += item.price * item.amount)
    }, 0)

  const totalOutcome = allTransactions
    .filter((item) => item.type === 'outcome')
    .reduce((acc, item) => {
      return (acc += item.price * item.amount)
    }, 0)

  const totalBalance = totalIncome - totalOutcome

  return {
    totalIncome,
    totalOutcome,
    totalBalance,
  }
}
