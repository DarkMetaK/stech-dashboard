import { useEffect, useState } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import { api } from '@/libs/axios'
import dayjs from 'dayjs'

import { Skeleton } from '@/components/Skeleton/styles'

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

export function IncomeChart() {
  const [isLoading, setIsLoading] = useState(true)
  const [totalIncomes, setTotalIncomes] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      try {
        setIsLoading(true)

        const response = await api.get<Transactions>('/transactions')

        const transactions = response.data

        const incomes = Object.values(transactions)
          .flat()
          .filter((transaction: Transaction) => transaction.type === 'income')

        setTotalIncomes(incomes)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTransactions()
  }, [])

  if (isLoading) {
    return <Skeleton height="240px" />
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={totalIncomes} style={{ fontSize: 12 }}>
        <XAxis
          dataKey="createdAt"
          axisLine={false}
          tickLine={true}
          tickFormatter={(date) => dayjs(date).format('DD/MM/YYYY')}
          dy={16}
        />

        <YAxis
          stroke="#888888"
          axisLine={false}
          tickLine={false}
          width={80}
          tickFormatter={(value: number) =>
            value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }
        />

        <CartesianGrid vertical={false} />

        <Line stroke="#00B37E" type="linear" strokeWidth={2} dataKey="price" />
      </LineChart>
    </ResponsiveContainer>
  )
}
