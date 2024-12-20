import { ICurrentUser } from "@renderer/service/login/login.dto"
import MyButton from "@renderer/view/components/common/my-button"
import { useRegisterController } from "../register.controller"

export default function RegisterForm({
    user,
    onDone,
    showAcceptTC = true,
    buttonTitle = "Register",
    formType = "add"
}: {
    user?: ICurrentUser
    buttonTitle?: string
    showAcceptTC?: boolean
    onDone?: () => void
    formType?: "add" | "edit"
}) {
    const { handleSubmit, isSubmitting } = useRegisterController(user, showAcceptTC, formType, onDone)

    return (
        <div className="grid gap-4">
            {/* <MyInputWithRHF
                control={control}
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="outline-2"
            />
            <MyInputWithRHF control={control} name="email" type="email" placeholder="Enter Your Email" />
            <div className="flex items-center gap-x-2">
                <MyInputWithRHF
                    control={control}
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                />
                <MyInputWithRHF
                    control={control}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                />
            </div>

            {showAcceptTC && (
                <div>
                    <MyCheckBoxWithRHF
                        control={control}
                        name="acceptTC"
                        content={
                            <p className="text-textSecondary dark:text-textSecondaryIn-dark text-sm font-normal">
                                I had read and accept the{" "}
                                <Link to={""} className="underline">
                                    Terms & Conditions
                                </Link>
                            </p>
                        }
                    />
                </div>
            )} */}

            <div />
            <MyButton
                loading={isSubmitting}
                onClick={async () => {
                    await handleSubmit()
                }}
                className="w-full"
            >
                {buttonTitle}
            </MyButton>
            <div />
        </div>
    )
}
