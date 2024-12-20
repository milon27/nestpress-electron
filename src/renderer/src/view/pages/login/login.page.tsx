import { StaticImageList } from "@renderer/constant/image.constant"
import { MyInputWithRHF } from "@renderer/view/components/common/form/my-input"
import MyButton from "@renderer/view/components/common/my-button"
import { Form } from "@renderer/view/components/ui/form"
import { RouteUrl } from "@renderer/view/router/url"
import { Link } from "react-router-dom"
import MySpacer from "../../components/common/my-spacer"
import MyTitle from "../../components/common/my-title"
import FullSectionWrapper from "../../components/layout/full-section-wrapper"
import { useLoginController } from "./login.controller"

export function LoginPage() {
    const { form, control, handleSubmit, isSubmitting } = useLoginController()
    return (
        <FullSectionWrapper className="h-screen grid place-content-center">
            <div className="md:w-96 m-auto px-4">
                <img src={StaticImageList.LOGO} className="w-20 m-auto" alt="" />
                <MySpacer className="h-8" />
                <MyTitle title="Login" large className="text-center" />
                <MySpacer className="h-8" />
                <Form {...form}>
                    <MyInputWithRHF control={control} name="email" type="email" label="Email address" />
                    <MySpacer className="h-1" />
                    <MyInputWithRHF
                        control={control}
                        name="password"
                        type="password"
                        label="Enter Your Password"
                    />
                    <MySpacer className="h-4" />
                    <MyButton
                        loading={isSubmitting}
                        onClick={async () => {
                            await handleSubmit()
                        }}
                        className="w-full"
                    >
                        Login
                    </MyButton>
                </Form>
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
