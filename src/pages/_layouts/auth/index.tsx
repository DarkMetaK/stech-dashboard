import { Outlet } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'

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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </AuthContainer>
  )
}
