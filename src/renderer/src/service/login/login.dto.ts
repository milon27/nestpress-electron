import { DateString } from "@renderer/@types/common.type"
import { z } from "zod"
import { ZodEmailString, ZodPasswordString } from "../../utils/zod.util"

// * Request object with zod
export const LoginWithEmailDto = z
    .object({
        email: ZodEmailString,
        password: ZodPasswordString
    })
    .strict()

export type ILoginWithEmailDto = z.infer<typeof LoginWithEmailDto>

// * Response object
export interface ICurrentUser {
    id: string
    fullName: string
    email: string
    gender: string
    avatar?: string
    isEmailVerified: boolean
    lastLoggedIn: DateString
    createdAt: DateString
    updatedAt: DateString

    phone: string
    isSuperAdmin: boolean
    isApproved: boolean
    timeZone: string
}
