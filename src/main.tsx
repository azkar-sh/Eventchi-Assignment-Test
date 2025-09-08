import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from '@/routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<div className='p-6 text-zinc-300'>Loading...</div>}><RouterProvider router={router} /></React.Suspense>
  </React.StrictMode>
)
