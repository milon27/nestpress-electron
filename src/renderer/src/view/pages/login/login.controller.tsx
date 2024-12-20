import { zodResolver } from "@hookform/resolvers/zod"
import { QUERY_KEYS, queryClient } from "@renderer/config/query.config"
import { LoginService } from "@renderer/service/login/login.service"
import { useUserStore } from "@renderer/store/user.store"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { ILoginWithEmailDto, LoginWithEmailDto } from "../../../service/login/login.dto"
import { ErrorUtil } from "../../../utils/error.util"

export const useLoginController = () => {
    const logout = useUserStore((s) => s.logout)

    const {
        control,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<ILoginWithEmailDto>({
        resolver: zodResolver(LoginWithEmailDto),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (input: ILoginWithEmailDto) => {
        try {
            await LoginService.loginWithEmail(input)
            await Promise.all([
                queryClient.invalidateQueries({
                    queryKey: [QUERY_KEYS.CURRENT_USER],
                    type: "all"
                })
            ])
            toast.success("login successful")
        } catch (error) {
            console.error("login with email:onSubmit:->", error)
            const message = ErrorUtil.getErrorMessage(error as Error).message
            toast.error(message)
        }
    }

    const logoutUser = async () => {
        try {
            await LoginService.logoutUser()
            await Promise.all([
                queryClient.invalidateQueries({
                    queryKey: [QUERY_KEYS.CURRENT_USER],
                    type: "all"
                })
            ])
            logout()
            queryClient.clear()
        } catch (error) {
            console.log("logoutUser->", error)
            const errorObject = ErrorUtil.getErrorMessage(error as Error)
            const message = errorObject?.message
            toast.error(message)
        }
    }

    return { control, handleSubmit: handleSubmit(onSubmit), logoutUser, isSubmitting }
}
