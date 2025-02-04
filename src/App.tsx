import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { darkTheme } from './styles/themes/dark'
import { AuthContextProvider } from './contexts/AuthContext'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
