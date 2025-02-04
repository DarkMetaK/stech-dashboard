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

import { NavLink, SidebarContainer, SidebarToggle } from './styles'

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const { pathname } = useLocation()

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <SidebarContainer data-open={isSidebarOpen}>
      <SidebarToggle
        onClick={handleToggleSidebar}
        data-open={isSidebarOpen}
        title={isSidebarOpen ? 'Minimizar' : 'Maximizar'}
      >
        <CaretDoubleLeft size={24} />
      </SidebarToggle>

      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Dashboard" data-active={pathname === '/'}>
              <House size={24} />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Relatórios"
              data-active={pathname === '/reports'}
            >
              <ChartPieSlice size={24} />
              <span>Relatórios</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Agenda"
              data-active={pathname === '/schedule'}
            >
              <Calendar size={24} />
              <span>Agenda</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Membros"
              data-active={pathname === '/members'}
            >
              <Users size={24} />
              <span>Membros</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              title="Configurações"
              data-active={pathname === '/settings'}
            >
              <Gear size={24} />
              <span>Configurações</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  )
}
