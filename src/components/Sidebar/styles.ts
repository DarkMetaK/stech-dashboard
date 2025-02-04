import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme['zinc-900']};
  color: ${({ theme }) => theme['zinc-50']};

  padding: 1.5rem;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  ul {
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    list-style: none;
  }
`

export const NavLink = styled(Link)`
  padding: 0.75rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${({ theme }) => theme['zinc-50']};
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme['zinc-800']};
  }

  &[data-active='true'] {
    background-color: ${({ theme }) => theme['zinc-800']};
  }
`

export const ToggleButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;

  background-color: transparent;
  color: ${({ theme }) => theme['zinc-50']};
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
`
