import Button from '@/components/Button'
import { useAuth } from '@/stores/auth'

export default function SignIn() {
  const login = useAuth(s=>s.login)
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold text-white">Sign In (Demo)</h1>
      <p className="text-sm text-zinc-300">Klik tombol di bawah untuk login dummy dan akses dashboard.</p>
      <Button onClick={login} className="w-full">Sign In</Button>
    </div>
  )
}
