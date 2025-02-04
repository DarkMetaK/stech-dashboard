import { Outlet } from 'react-router-dom'

import logo from '@/assets/stech-logo.svg'

import { AuthContainer, Hero } from './styles'

export function AuthLayout() {
  return (
    <AuthContainer>
      <Hero>
        <img src={logo} alt="" />
        <span>Stech Dashboard</span>
      </Hero>

      <Outlet />
    </AuthContainer>
  )
}
