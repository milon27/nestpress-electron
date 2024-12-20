import { BrowserRouter, Route, Routes } from "react-router-dom"
// import ProtectedRoute from "./protected.route"
import { PageWrapper, SidebarWrapper } from "@milon27/react-sidebar"
import { Constant } from "@renderer/constant/common.constant"
import { useGlobalModal } from "@renderer/store/modal.store"
import { useUserStore } from "@renderer/store/user.store"
import { MyGlobalModal } from "../components/common/my-global-modal"
import { ForgetPasswordPage } from "../pages/forget-password/forget-password.page"
import { ResetPasswordPage } from "../pages/forget-password/reset-password.page"
import { useLoginController } from "../pages/login/login.controller"
import { LoginPage } from "../pages/login/login.page"
import { NotFoundPage } from "../pages/not-found/not-found.page"
import { RegisterPage } from "../pages/register/register.page"
import ProtectedRoute from "./protected.route"
import PublicRoute from "./public.route"
import { useSidebarController } from "./sidebar/sidebar-items"
import { RouteUrl } from "./url"

export default function RootRouter() {
    const modal = useGlobalModal()
    const user = useUserStore((state) => state.user)
    const { navItems } = useSidebarController()
    const { logoutUser } = useLoginController()
    return (
        <>
            <SidebarWrapper
                title={""}
                // logoUrl={}
                userName={user?.fullName}
                userImageUrl={user?.avatar ? user.avatar : Constant.DEFAULT_AVATAR}
                navItems={navItems}
                activeStyle="outline" // fill , outline
                disableCollapse
                hideBorder
                onLogOut={() => logoutUser()}
                onLogoClick={() => {
                    window.location.replace(RouteUrl.HOME)
                }}
                onProfileImgClick={() => {}}
            >
                <BrowserRouter>
                    <MyGlobalModal {...modal} />

                    <Routes>
                        <Route
                            path={RouteUrl.HOME}
                            element={
                                <ProtectedRoute>
                                    <PageWrapper className="px-6">
                                        <h1>home</h1>
                                    </PageWrapper>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={RouteUrl.REGISTER}
                            element={
                                <PublicRoute>
                                    <RegisterPage />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path={RouteUrl.LOGIN}
                            element={
                                <PublicRoute>
                                    <LoginPage />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path={RouteUrl.FORGET_PASSWORD}
                            element={
                                <PublicRoute>
                                    <ForgetPasswordPage />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path={RouteUrl.RESET_PASSWORD}
                            element={
                                <PublicRoute>
                                    <ResetPasswordPage />
                                </PublicRoute>
                            }
                        />

                        <Route path={RouteUrl.NOT_FOUND} element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </SidebarWrapper>
        </>
    )
}
