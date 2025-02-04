import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'

import googleIcon from '@/assets/google-logo.svg'
import { Button } from '@/components/Button'

import { SignInContainer, Form, PasswordRecovery } from './styles'
import { Input } from '@/components/Input'
import { api } from '@/libs/axios'
import axios from 'axios'
import { useContext } from 'react'
import { authContext } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

interface SignInBody {
  id: string
  name: string
  avatarUrl: string
  email: string
  password: string
}

const signInFormSchema = z.object({
  email: z
    .string({ message: 'Esse campo é obrigatório.' })
    .nonempty({ message: 'Esse campo é obrigatório.' })
    .email({ message: 'E-mail inválido.' }),
  password: z
    .string({ message: 'Esse campo é obrigatório.' })
    .nonempty({ message: 'Esse campo é obrigatório.' }),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { saveToken } = useContext(authContext)
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn({ email, password }: SignInFormData) {
    try {
      const response = await api.get<SignInBody[]>(
        `/users?email=${email}&password=${password}`,
      )

      if (response.data.length === 0) {
        return toast('Credenciais inválidas.', { type: 'error' })
      }

      saveToken(response.data[0].id)
      await navigate('/', { replace: true })
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data)
      } else {
        toast('Ocorreu um erro inesperado. Tente novamente mais tarde.', {
          type: 'error',
        })
      }

      console.error(error)
    }
  }

  return (
    <SignInContainer>
      <div>
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Controller
            control={control}
            render={({ field }) => (
              <Input {...field} label="E-mail" error={errors.email?.message} />
            )}
            name="email"
          />

          <PasswordRecovery>
            <Controller
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Senha"
                  type="password"
                  error={errors.password?.message}
                />
              )}
              name="password"
            />
            <a href="#">Esqueci minha senha</a>
          </PasswordRecovery>

          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Acessar Sistema
          </Button>
        </Form>

        <span>Ou</span>

        <Button variant="ghost" disabled={isSubmitting}>
          <img src={googleIcon} alt="" /> Acessar com Google
        </Button>
      </div>
    </SignInContainer>
  )
}
