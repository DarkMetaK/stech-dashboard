import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import dayjs from 'dayjs'
import { useQuery } from '@tanstack/react-query'

import { getTransactions } from '@/api/transactions'
import { Skeleton } from '@/components/Skeleton/styles'

export function OutcomeChart() {
  const { data: outcomeTransactions, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    select(data) {
      return data.filter((item) => item.type === 'outcome')
    },
  })

  if (isLoading) {
    return <Skeleton height="240px" />
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={outcomeTransactions} style={{ fontSize: 12 }}>
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
