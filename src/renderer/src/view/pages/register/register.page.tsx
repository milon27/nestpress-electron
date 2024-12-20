import { StaticImageList } from "@renderer/constant/image.constant"
import ContainerSectionWrapper from "@renderer/view/components/layout/container-section-wrapper"
import { RouteUrl } from "@renderer/view/router/url"
import { Link } from "react-router-dom"
import MySpacer from "../../components/common/my-spacer"
import MyTitle from "../../components/common/my-title"
import RegisterForm from "./components/register.form"

export function RegisterPage() {
    return (
        <ContainerSectionWrapper className="grid">
            <MySpacer className="h-14" />
            <div className=" my-auto md:m-auto md:bg-gray-50 p-10 rounded-xl relative">
                <div className="absolute -top-2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <img src={StaticImageList.LOGO} alt="" className="w-3/4 mx-auto" />
                </div>
                <MySpacer className="h-4" />
                <MyTitle title="Sign Up Now" className="text-center" />
                <MySpacer className="h-4" />
                <p className="text-center text-[#556987]">Fill up your form here</p>
                <MySpacer className="h-4 md:h-6" />

                <RegisterForm />
                <div>
                    <p className="text-textSecondary dark:text-textSecondaryIn-dark text-sm font-normal text-center">
                        Already have an account?{" "}
                        <Link to={RouteUrl.LOGIN} className="underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </ContainerSectionWrapper>
    )
}
