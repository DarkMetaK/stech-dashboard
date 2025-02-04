import { InputHTMLAttributes, forwardRef } from 'react'
import { ErrorMessage, InputContainer, InputStyle } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <InputContainer data-error={!!error}>
        {label}

        <InputStyle ref={ref} {...rest} />

        <ErrorMessage>{error}</ErrorMessage>
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
