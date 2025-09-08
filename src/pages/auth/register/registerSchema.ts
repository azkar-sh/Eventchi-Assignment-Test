import { z } from 'zod'

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Minimum 3 characters')
      .max(20, 'Maximum 20 characters')
      .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, underscore'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Minimum 8 characters')
      .regex(/[A-Za-z]/, 'At least one letter')
      .regex(/[0-9]/, 'At least one number'),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterValues = z.infer<typeof registerSchema>
