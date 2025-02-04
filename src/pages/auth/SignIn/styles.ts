import styled from 'styled-components'

export const SignInContainer = styled.main`
  background-color: ${(props) => props.theme.black};

  & > div {
    max-width: 27.5rem;
    width: 100%;
    height: 100vh;
    padding: 1.25rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    & > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['zinc-400']};
      font-size: 1rem;

      &::before,
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme['zinc-400']};
      }
    }

    @media (max-width: 920px) {
      justify-content: flex-start;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: ${(props) => props.theme.white};
      font-size: 1.125rem;
      font-weight: 500;
    }
  }
`

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['zinc-100']};

  background-color: ${(props) => props.theme['zinc-50']};
  font-size: 1.125rem;

  &::placeholder {
    color: ${(props) => props.theme['zinc-600']};
  }
`

export const PasswordRecovery = styled.div`
  display: flex;
  flex-direction: column;

  a {
    align-self: flex-end;
    color: ${(props) => props.theme['zinc-400']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['blue-300']};
    }
  }
`

export const ErrorMessage = styled.p`
  min-height: 1rem;

  color: ${(props) => props.theme['red-500']};
  font-size: 1rem;
  font-weight: 400;
`
