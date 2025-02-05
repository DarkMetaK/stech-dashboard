import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { darkTheme } from './styles/themes/dark'
import { AuthContextProvider } from './contexts/AuthContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './libs/react-query'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
