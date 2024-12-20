import { StaticImageList } from "@renderer/constant/image.constant"
import MyButton from "@renderer/view/components/common/my-button"
import { RouteUrl } from "@renderer/view/router/url"
import { Link } from "react-router-dom"
import MySpacer from "../../components/common/my-spacer"
import MyTitle from "../../components/common/my-title"
import FullSectionWrapper from "../../components/layout/full-section-wrapper"
import { useLoginController } from "./login.controller"

export function LoginPage() {
    const { handleSubmit, isSubmitting } = useLoginController()
    return (
        <FullSectionWrapper className="h-screen grid place-content-center">
            <div className="md:w-96 m-auto px-4">
                <img src={StaticImageList.LOGO} className="w-1/2 m-auto" alt="" />
                <MySpacer className="h-8" />
                <MyTitle title="Login" large className="text-center" />
                <MySpacer className="h-8" />
                <div className="space-y-4">
                    {/* <MyInputWithRHF control={control} name="email" type="email" placeholder="Enter Your Email" />
                    <MyInputWithRHF
                        control={control}
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                    /> */}
                    <MyButton
                        loading={isSubmitting}
                        onClick={async () => {
                            await handleSubmit()
                        }}
                        className="w-full"
                    >
                        Login
                    </MyButton>
                </div>
                <MySpacer className="h-4" />
                <div>
                    <p className="text-gray-400 text-sm font-normal text-right">
                        <Link to={RouteUrl.FORGET_PASSWORD} className="underline">
                            Forget Your Password?
                        </Link>
                    </p>
                </div>
                {/* <MySpacer className="h-4" />
                <MyButton
                    variant={"outline"}
                    onClick={() => {
                        navigate(RouteUrl.REGISTER)
                    }}
                    className="w-full"
                >
                    Create Your Account!
                </MyButton> */}
            </div>
        </FullSectionWrapper>
    )
}
