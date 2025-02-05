import { useQuery } from '@tanstack/react-query'

import { getTransactions } from '@/api/transactions'

export function useSummary() {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
  })

  const totalIncome = (transactions ?? [])
    .filter((item) => item.type === 'income')
    .reduce((acc, item) => {
      return (acc += item.price * item.amount)
    }, 0)

  const totalOutcome = (transactions ?? [])
    .filter((item) => item.type === 'outcome')
    .reduce((acc, item) => {
      return (acc += item.price * item.amount)
    }, 0)

  const totalBalance = totalIncome - totalOutcome

  return {
    totalIncome,
    totalOutcome,
    totalBalance,
    isLoading,
  }
}
