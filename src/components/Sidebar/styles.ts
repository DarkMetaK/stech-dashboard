import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.aside`
  width: 15rem;
  padding: 1.5rem;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme['zinc-900']};
  transition: 300ms ease-in-out;
  overflow: hidden;

  nav,
  ul {
    width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    list-style: none;
  }

  &[data-open='false'] {
    width: 6rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
    bottom: 0;
    width: 100% !important;

    ul {
      flex-direction: row;
      gap: 0.75rem;
      justify-content: space-between;
    }

    flex-direction: row;
  }
`

export const NavLink = styled(Link)`
  padding: 0.75rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: inherit;
  font-size: 1rem;
  text-decoration: none;
  overflow: hidden;

  svg {
    flex-shrink: 0;
  }

  span {
    flex-grow: 1;
  }

  &:hover {
    background-color: ${({ theme }) => theme['zinc-800']};
  }

  &[data-active='true'] {
    background-color: ${({ theme }) => theme['blue-500']};
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`

export const SidebarToggle = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;

  background-color: transparent;
  line-height: 0;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme['zinc-50']};
    transition: 0.3s;
  }

  &:hover {
    background-color: ${({ theme }) => theme['zinc-800']};
  }

  &[data-open='false'] {
    svg {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
