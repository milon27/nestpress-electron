import { zodResolver } from "@hookform/resolvers/zod"
import {
    ForgetPasswordSchema,
    IForgetPasswordSchema,
    IResetPasswordSchema,
    ResetPasswordSchema
} from "@renderer/service/forget-password/forget-password.schema"
import { ForgetPasswordService } from "@renderer/service/forget-password/forget-password.service"
import { ErrorUtil } from "@renderer/utils/error.util"
import { RouteUrl } from "@renderer/view/router/url"

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const useForgetPasswordController = () => {
    const navigate = useNavigate()
    const {
        control,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<IForgetPasswordSchema>({
        resolver: zodResolver(ForgetPasswordSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = async (input: IForgetPasswordSchema) => {
        try {
            const response = await ForgetPasswordService.getForgetPasswordCodeViaEmail(input)
            toast(response.message)
        } catch (error) {
            console.error("forget password:onSubmit:->", error)
            toast.error(ErrorUtil.getErrorMessage(error as Error).message)
        }
    }

    // reset password
    const {
        control: resetControl,
        handleSubmit: resetHandleSubmit,
        formState: { isSubmitting: resetIsSubmitting }
    } = useForm<IResetPasswordSchema>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            code: "",
            password: "",
            confirmPassword: ""
        }
    })

    const resetOnSubmit = async (input: IResetPasswordSchema) => {
        try {
            const response = await ForgetPasswordService.resetPassword(input)
            toast(response.message)
            navigate(RouteUrl.LOGIN, {
                replace: true
            })
        } catch (error) {
            console.error("forget password:onSubmit:->", error)
            toast.error(ErrorUtil.getErrorMessage(error as Error).message)
        }
    }

    return {
        control,
        isSubmitting,
        handleSubmit: handleSubmit(onSubmit),

        resetControl,
        resetIsSubmitting,
        resetHandleSubmit: resetHandleSubmit(resetOnSubmit)
    }
}