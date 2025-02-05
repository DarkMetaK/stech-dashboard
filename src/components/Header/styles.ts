import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled.header`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['zinc-800']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 425px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`

export const SearchInputContainer = styled.div`
  max-width: 25rem;
  width: 100%;
  padding-left: 0.75rem;
  border-radius: 8px;
  border: 2px solid transparent;

  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme['zinc-800']};
  color: ${(props) => props.theme['zinc-500']};
  overflow: hidden;

  svg {
    flex-shrink: 0;
  }

  input {
    flex: 1;
    border: none;
    padding: 0.75rem;

    background-color: transparent;
    color: ${(props) => props.theme['zinc-50']};
    font-size: 1.125rem;

    &::placeholder {
      color: ${(props) => props.theme['zinc-500']};
    }

    &:focus {
      box-shadow: 0 0 0 0;
    }
  }

  &:has(input:focus) {
    border-color: ${(props) => props.theme['blue-500']};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const AccountMenu = styled.button`
  width: 15rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: transparent;
  color: ${(props) => props.theme['zinc-50']};
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme['zinc-800']};
    border-radius: 50%;
    object-fit: cover;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    overflow: hidden;

    strong {
      font-size: 1rem;
      font-family: 'Montserrat', sans-serif;
    }

    span {
      max-width: 100%;

      color: ${({ theme }) => theme['zinc-400']};
      font-size: 0.75rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme['zinc-800']};
  }

  @media (max-width: 768px) {
    width: fit-content;
    padding: 0 0 0.5rem 0;
    flex-shrink: 0;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }

    div {
      display: none;
    }
  }
`

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  z-index: 999;
  width: 15rem;
  border: 1px solid ${({ theme }) => theme['zinc-800']};
  border-radius: 8px;

  background-color: ${({ theme }) => theme['zinc-950']};
  overflow: hidden;

  @media (max-width: 768px) {
    width: fit-content;
  }
`

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['zinc-50']};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['zinc-800']};
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme['zinc-800']};
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.5);
`

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);

  padding: 2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['zinc-950']};

  h2 {
    margin-bottom: 1rem;

    font-size: 1.125rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    button {
      margin-top: 0px;
      flex: 1;
      font-size: 1rem;
      padding: 0.75rem 1rem;
    }
  }

  &:focus {
    box-shadow: 0 0 0 0;
  }
`
