import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'primary' | 'destructive' | 'ghost'
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === 'primary'
      ? css`
          border: none;
          background-color: ${props.theme['blue-500']};
          color: ${props.theme.white};

          &:not(:disabled):hover {
            background-color: ${props.theme['blue-300']};
          }
        `
      : props.variant === 'ghost'
        ? css`
            border: 1px solid ${props.theme.white};
            background-color: transparent;
            color: ${props.theme.white};

            &:not(:disabled):hover {
              color: ${props.theme['blue-300']};
              border-color: ${props.theme['blue-300']};
            }
          `
        : css`
            border: none;
            background-color: ${props.theme['red-500']};
            color: ${props.theme.white};

            &:not(:disabled):hover {
              background-color: ${props.theme['red-300']};
            }
          `}
`

export const Loader = styled.span`
  width: 20px;
  height: 20px;
  border: 4px solid ${(props) => props.theme.white};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
