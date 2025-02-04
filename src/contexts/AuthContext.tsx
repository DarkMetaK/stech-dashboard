import { createContext, ReactNode, useEffect, useState } from 'react'

interface AuthContextProps {
  accessToken: string | null
  authIsLoading: boolean
  saveToken: (token: string) => void
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const authContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [authIsLoading, setAuthIsLoading] = useState(true)

  useEffect(() => {
    setAuthIsLoading(true)

    const token = localStorage.getItem('stech-dashboard')

    if (token) {
      setAccessToken(token)
    }

    setAuthIsLoading(false)
  }, [])

  function saveToken(token: string) {
    localStorage.setItem('stech-dashboard', token)
    setAccessToken(token)
  }

  function logout() {
    localStorage.removeItem('stech-dashboard')
    setAccessToken(null)
  }

  return (
    <authContext.Provider
      value={{
        accessToken,
        authIsLoading,
        saveToken,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
