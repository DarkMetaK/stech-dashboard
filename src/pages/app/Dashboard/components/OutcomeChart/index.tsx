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

export function OutcomeChart() {
  const [isLoading, setIsLoading] = useState(true)
  const [totalOutcomes, setTotalOutcomes] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      try {
        setIsLoading(true)
        const response = await api.get<Transactions>('/transactions')

        const transactions = response.data

        const outcomes = Object.values(transactions)
          .flat()
          .filter((transaction: Transaction) => transaction.type === 'outcome')

        setTotalOutcomes(outcomes)
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
      <LineChart data={totalOutcomes} style={{ fontSize: 12 }}>
        <XAxis
          dataKey="createdAt"
          axisLine={false}
          tickLine={true}
          dy={16}
          tickFormatter={(date) => dayjs(date).format('DD/MM/YYYY')}
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

        <Line stroke="#F75A68" type="linear" strokeWidth={2} dataKey="price" />
      </LineChart>
    </ResponsiveContainer>
  )
}
