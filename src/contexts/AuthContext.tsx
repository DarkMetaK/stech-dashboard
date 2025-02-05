import { createContext, ReactNode, useEffect, useState } from 'react'

interface User {
  id: string
  avatarUrl: string
  name: string
  email: string
}

interface AuthContextProps {
  accessToken: string | null
  user: User | null
  authIsLoading: boolean
  saveAuth: (data: { token: string; user: User }) => void
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const authContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [authIsLoading, setAuthIsLoading] = useState(true)

  useEffect(() => {
    setAuthIsLoading(true)

    const {
      token,
      user,
    }: { token: string | undefined; user: User | undefined } = JSON.parse(
      localStorage.getItem('stech-dashboard') || '{}',
    )

    if (token && user) {
      setAccessToken(token)
      setUser(user)
    }

    setAuthIsLoading(false)
  }, [])

  function saveAuth({ token, user }: { token: string; user: User }) {
    localStorage.setItem('stech-dashboard', JSON.stringify({ token, user }))

    setAccessToken(token)
    setUser(user)
  }

  function logout() {
    localStorage.removeItem('stech-dashboard')

    setAccessToken(null)
    setUser(null)
  }

  return (
    <authContext.Provider
      value={{
        accessToken,
        user,
        authIsLoading,
        saveAuth,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
