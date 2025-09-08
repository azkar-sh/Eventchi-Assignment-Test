import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import RootLayout from '@/layouts/RootLayout'
import ProtectedRoute from '@/components/ProtectedRoute'

const Home = lazy(() => import('@/pages/home/page'))
const About = lazy(() => import('@/pages/About'))
const Register = lazy(() => import('@/pages/auth/register/page'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'register', element: <Register /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: 'dashboard', element: <Dashboard /> }],
      },
    ],
  },
])
