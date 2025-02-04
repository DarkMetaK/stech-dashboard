import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Calendar,
  ChartPieSlice,
  House,
  Users,
  CaretDoubleLeft,
  Gear,
} from 'phosphor-react'

import { NavLink, SidebarContainer, ToggleButton } from './styles'

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const { pathname } = useLocation()

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <SidebarContainer>
      <ToggleButton data-open={isSidebarOpen} onClick={handleToggleSidebar}>
        <CaretDoubleLeft size={24} />
      </ToggleButton>

      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Dashboard" data-active={pathname === '/'}>
              <House size={24} />
              {isSidebarOpen && 'Dashboard'}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Relatórios"
              data-active={pathname === '/reports'}
            >
              <ChartPieSlice size={24} />
              {isSidebarOpen && 'Relatórios'}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Agenda"
              data-active={pathname === '/schedule'}
            >
              <Calendar size={24} />
              {isSidebarOpen && 'Agenda'}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Membros"
              data-active={pathname === '/members'}
            >
              <Users size={24} />
              {isSidebarOpen && 'Membros'}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Configurações"
              data-active={pathname === '/settings'}
            >
              <Gear size={24} />
              {isSidebarOpen && 'Configurações'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  )
}
