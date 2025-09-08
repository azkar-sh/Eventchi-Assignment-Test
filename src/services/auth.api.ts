import type { RegisterValues } from '@/pages/auth/register/registerSchema'

export async function registerApi(payload: RegisterValues) {
  await new Promise((r) => setTimeout(r, 800))

  if (payload.username?.toLowerCase() === 'admin') {
    return { ok: false, field: 'username', message: 'Username is already taken' as const }
  }

  return { ok: true as const }
}
