import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { authContext } from '@/contexts/AuthContext'

export function AppLayout() {
  const { accessToken, authIsLoading } = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authIsLoading && !accessToken) {
      navigate('/sign-in', { replace: true })
    }
  }, [accessToken, authIsLoading, navigate])

  return (
    <div>
      <h1>App Layout</h1>

      <Outlet />
    </div>
  )
}
