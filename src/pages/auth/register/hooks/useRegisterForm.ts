import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterValues } from '../registerSchema'
import { registerApi } from '@/services/auth.api'

export function useRegisterForm() {
  const [showPw, setShowPw] = useState(false)
  const [showPw2, setShowPw2] = useState(false)

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    const payload = {
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password,
      confirmPassword: values.confirmPassword,
    }

    const res = await registerApi(payload)
    if (!res.ok) {
      const field = (res.field as keyof RegisterValues) ?? 'root'
      form.setError(field as any, { message: res.message })
      return
    }
    alert('Account created!')
  })

  return { ...form, onSubmit, showPw, setShowPw, showPw2, setShowPw2 }
}
