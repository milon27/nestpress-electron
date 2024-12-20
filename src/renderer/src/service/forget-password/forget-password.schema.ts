import { ZodEmailString, ZodSimpleString } from '@renderer/utils/zod.util'
import { z } from 'zod'

export const ForgetPasswordSchema = z.object({
  email: ZodEmailString
})
export type IForgetPasswordSchema = z.infer<typeof ForgetPasswordSchema>

export const ResetPasswordSchema = z
  .object({
    password: ZodEmailString,
    confirmPassword: ZodEmailString,
    code: ZodSimpleString
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match.",
    path: ['confirmPassword']
  })
export type IResetPasswordSchema = z.infer<typeof ResetPasswordSchema>
