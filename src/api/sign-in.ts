import { api } from '@/libs/axios'

interface SignInRequest {
  email: string
  password: string
}

interface SignInResponse {
  id: string
  name: string
  avatarUrl: string
  email: string
  password: string
}

export async function signIn({ email, password }: SignInRequest) {
  const response = await api.get<SignInResponse[]>(
    `/users?email=${email}&password=${password}`,
  )

  return response.data
}
