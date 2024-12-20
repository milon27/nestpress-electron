import { StaticImageList } from "@renderer/constant/image.constant"
import { MyInputWithRHF } from "@renderer/view/components/common/form/my-input"
import MyButton from "@renderer/view/components/common/my-button"
import { Form } from "@renderer/view/components/ui/form"
import { RouteUrl } from "@renderer/view/router/url"
import { Link } from "react-router-dom"
import MySpacer from "../../components/common/my-spacer"
import MyTitle from "../../components/common/my-title"
import FullSectionWrapper from "../../components/layout/full-section-wrapper"
import { useForgetPasswordController } from "./forget-password.controller"

export function ResetPasswordPage() {
    const { resetForm, resetControl, resetHandleSubmit, resetIsSubmitting } = useForgetPasswordController()

    return (
        <FullSectionWrapper className="h-screen grid place-content-center">
            <div className="md:w-96 m-auto px-4">
                <img src={StaticImageList.LOGO} className="w-1/2 m-auto" alt="" />
                <MySpacer className="h-8" />
                <MyTitle title="Forget your password?" large className="text-center" />
                <MySpacer className="h-8" />
                <Form {...resetForm}>
                    <div className="space-y-4">
                        <MyInputWithRHF
                            control={resetControl}
                            name="code"
                            type="text"
                            label="Enter 6 digit Code"
                        />
                        <MyInputWithRHF
                            control={resetControl}
                            name="password"
                            type="password"
                            label="Enter Your Password"
                        />
                        <MyInputWithRHF
                            control={resetControl}
                            name="confirmPassword"
                            type="password"
                            label="Confirm Your Password"
                        />
                        <MyButton
                            loading={resetIsSubmitting}
                            onClick={async () => {
                                await resetHandleSubmit()
                            }}
                            className="w-full"
                        >
                            Reset Password
                        </MyButton>
                    </div>
                </Form>
                <MySpacer className="h-4" />
                <div>
                    <p className="text-gray-400 text-sm font-normal text-center">
                        <Link to={RouteUrl.LOGIN} className="underline">
                            Go back to Login?
                        </Link>
                    </p>
                </div>
                <MySpacer className="h-4" />
            </div>
        </FullSectionWrapper>
    )
}
