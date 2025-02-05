import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import googleIcon from '@/assets/google-logo.svg'
import { signIn } from '@/api/sign-in'
import { authContext } from '@/contexts/AuthContext'

import { SignInContainer, Form, PasswordRecovery } from './styles'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

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
  const { saveAuth } = useContext(authContext)
  const navigate = useNavigate()

  const { mutateAsync } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data.length === 0) {
        return toast('Credenciais inválidas.', { type: 'error' })
      }

      saveAuth({
        token: new Date().getTime().toString(),
        user: {
          id: data[0].id,
          avatarUrl: data[0].avatarUrl,
          name: data[0].name,
          email: data[0].email,
        },
      })
      navigate('/', { replace: true })
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn(data: SignInFormData) {
    await mutateAsync(data)
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
