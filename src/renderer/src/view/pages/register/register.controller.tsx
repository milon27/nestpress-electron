import { zodResolver } from "@hookform/resolvers/zod"
import { ICurrentUser } from "@renderer/service/login/login.dto"
import { IRegisterDto } from "@renderer/service/register/register.dto"
import { IRegisterWithEmailSchema, RegisterWithEmailSchema } from "@renderer/service/register/register.schema"
import { RegisterService } from "@renderer/service/register/register.service"
import { ErrorUtil } from "@renderer/utils/error.util"
import { RouteUrl } from "@renderer/view/router/url"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const DEFAULT_COMPANY_PASS_FOR_UPDATE = `xp_default`

export const useRegisterController = (
    user?: ICurrentUser,
    showAcceptTC = true,
    formType: "add" | "edit" = "add",
    onDone?: () => void
) => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
        setValue
    } = useForm<IRegisterWithEmailSchema>({
        resolver: zodResolver(RegisterWithEmailSchema),
        defaultValues: {
            fullName: user?.fullName || "",
            email: user?.email || "",
            password: formType === "add" ? "" : DEFAULT_COMPANY_PASS_FOR_UPDATE,
            confirmPassword: formType === "add" ? "" : DEFAULT_COMPANY_PASS_FOR_UPDATE,

            acceptTC: !showAcceptTC
        }
    })

    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onUpdate = async (_input: IRegisterWithEmailSchema) => {
        // let password: string | undefined = undefined
        // if (input.password !== DEFAULT_COMPANY_PASS_FOR_UPDATE) {
        //     password = input.password
        // }
        // const dto: IUpdateUserDto = {
        //     user: {
        //         fullName: input.fullName,
        //         email: input.email,
        //         password: password
        //     }
        // }
        // // update, upload actual logo and audio
        // UserService.updateCustomerAndCompanyById(user.id, dto),
        // // reset()
        // if (onDone) {
        //     onDone()
        // } else {
        //     toast(userResponse.message)
        // }
    }

    const onSubmit = async (input: IRegisterWithEmailSchema) => {
        try {
            // dto
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
            const dto: IRegisterDto = {
                provider: "simple",
                user: {
                    fullName: input.fullName,
                    email: input.email,
                    password: input.password,
                    fcmToken: null,
                    timeZone
                }
            }

            // register
            const userResponse = await RegisterService.registerWithEmail(dto)
            reset()
            if (onDone) {
                onDone()
            } else {
                toast(userResponse.message)
                navigate(RouteUrl.LOGIN)
            }
        } catch (error) {
            console.error("register with email:onSubmit:->", error)
            const message = ErrorUtil.getErrorMessage(error as Error).message
            toast(message)
        }
    }

    return {
        control,
        errors,
        handleSubmit: formType === "add" ? handleSubmit(onSubmit) : handleSubmit(onUpdate),
        isSubmitting,
        setValue
    }
}
