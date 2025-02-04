import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { authContext } from '@/contexts/AuthContext'

import { AppContainer } from './styles'
import { Sidebar } from '@/components/Sidebar'

export function AppLayout() {
  const { accessToken, authIsLoading } = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authIsLoading && !accessToken) {
      navigate('/sign-in', { replace: true })
    }
  }, [accessToken, authIsLoading, navigate])

  return (
    <AppContainer>
      <Sidebar />
      <Outlet />
    </AppContainer>
  )
}
