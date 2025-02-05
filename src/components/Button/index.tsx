import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, Loader } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'destructive'
  isLoading?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  isLoading = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {isLoading ? <Loader /> : children}
    </ButtonContainer>
  )
}
