import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { useQuery } from '@tanstack/react-query'

import { getTransactions } from '@/api/transactions'
import dayjs from 'dayjs'

import { Skeleton } from '@/components/Skeleton/styles'

export function IncomeChart() {
  const { data: incomeTransactions, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    select(data) {
      return data.filter((item) => item.type === 'income')
    },
  })

  if (isLoading) {
    return <Skeleton height="240px" />
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={incomeTransactions} style={{ fontSize: 12 }}>
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
