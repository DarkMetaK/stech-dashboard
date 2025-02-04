import styled from 'styled-components'

export const InputStyle = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['zinc-100']};

  background-color: ${(props) => props.theme['zinc-50']};
  font-size: 1.125rem;

  &::placeholder {
    color: ${(props) => props.theme['zinc-600']};
  }
`

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${(props) => props.theme.white};
  font-size: 1.125rem;
  font-weight: 500;

  &[data-error='true'] {
    color: ${(props) => props.theme['red-500']};

    ${InputStyle} {
      border-color: ${(props) => props.theme['red-500']};
    }
  }
`

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme['red-500']};
  font-size: 1rem;
  font-weight: 400;
`
