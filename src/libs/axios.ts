import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333',
})

// Simular delay
api.interceptors.request.use(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return config
})
