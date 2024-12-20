import { StaticImageList } from "@renderer/constant/image.constant"
import MyButton from "@renderer/view/components/common/my-button"
import MySpacer from "@renderer/view/components/common/my-spacer"
import MyTitle from "@renderer/view/components/common/my-title"
import FullSectionWrapper from "@renderer/view/components/layout/full-section-wrapper"
import { RouteUrl } from "@renderer/view/router/url"
import { Link } from "react-router-dom"
import { useForgetPasswordController } from "./forget-password.controller"

export function ForgetPasswordPage() {
    const { handleSubmit, isSubmitting } = useForgetPasswordController()
    return (
        <FullSectionWrapper className="h-screen grid place-content-center">
            <div className="md:w-96 m-auto px-4">
                <img src={StaticImageList.LOGO} className="w-1/2 m-auto" alt="" />
                <MySpacer className="h-8" />
                <MyTitle title="Forget your password?" large className="text-center" />
                <MySpacer className="h-8" />
                <div className="space-y-4">
                    {/* // todo: xxxx */}
                    {/* <MyInputWithRHF control={control} name="email" type="email" placeholder="Enter Your Email" /> */}
                    <MyButton
                        loading={isSubmitting}
                        onClick={async () => {
                            await handleSubmit()
                        }}
                        className="w-full"
                    >
                        Get Reset Password Code
                    </MyButton>
                </div>
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
