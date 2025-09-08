import { Navigate, Outlet } from 'react-router'
import { useAuth } from '@/stores/auth'

export default function ProtectedRoute() {
  const isAuthed = useAuth(s=>s.isAuthed)
  return isAuthed ? <Outlet /> : <Navigate to="/" replace />
}
