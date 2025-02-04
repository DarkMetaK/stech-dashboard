import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'primary' | 'ghost'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  margin-top: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.white};
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === 'primary'
      ? css`
          border: none;
          background-color: ${props.theme['blue-500']};
          color: ${props.theme.white};

          &:hover {
            background-color: ${props.theme['blue-300']};
          }
        `
      : props.variant === 'ghost' &&
        css`
          border: 1px solid ${props.theme.white};
          background-color: transparent;
          color: ${props.theme.white};

          &:hover {
            color: ${props.theme['blue-300']};
            border-color: ${props.theme['blue-300']};
          }
        `}
`
