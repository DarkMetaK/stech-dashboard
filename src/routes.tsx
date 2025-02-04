import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/SignIn'

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <AppLayout />,
  //   children: [
  //     { path: '/', element: <Dashboard /> },
  //     { path: '/orders', element: <Orders /> },
  //   ],
  // },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },

  {
    path: '*',
    element: <></>,
  },
])
