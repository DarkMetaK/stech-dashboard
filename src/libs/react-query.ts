import { QueryCache, QueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const title = axios.isAxiosError(error)
        ? error.response?.data
        : 'Ocorreu um erro inesperado. Tente novamente mais tarde.'

      toast(title, {
        type: 'error',
      })

      console.error(error)
    },
  }),
})
