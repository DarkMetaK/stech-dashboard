import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import googleIcon from '@/assets/google-logo.svg'
import { Button } from '@/components/Button'

import { SignInContainer, Form, PasswordRecovery } from './styles'
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
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn({ email, password }: SignInFormData) {
    console.log({ email, password })
    reset()
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

          <Button type="submit">Acessar Sistema</Button>
        </Form>

        <span>Ou</span>

        <Button variant="ghost" disabled={isSubmitting}>
          <img src={googleIcon} alt="" /> Acessar com Google
        </Button>
      </div>
    </SignInContainer>
  )
}
