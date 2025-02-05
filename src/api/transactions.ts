import { api } from '@/libs/axios'

interface TransactionsResponse {
  id: number
  name: string
  type: 'income' | 'outcome'
  price: number
  amount: number
  createdAt: string
}

export async function getTransactions() {
  const response = await api.get<TransactionsResponse[]>('/transactions')

  return response.data
}
