import { QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import { queryClient } from "./config/query.config"
import AuthWrapper from "./view/components/layout/auth-wrapper"
import MyErrorBoundaryLayout from "./view/components/layout/error-boundary.layout"
import RootRouter from "./view/router/root.router"

function App(): JSX.Element {
    return (
        <div className="">
            {/* todo: className="dark" for dark mode*/}
            <div className="font-inter bg-white ">
                <MyErrorBoundaryLayout>
                    <QueryClientProvider client={queryClient}>
                        <AuthWrapper>
                            <RootRouter />
                        </AuthWrapper>
                    </QueryClientProvider>
                    <ToastContainer />
                </MyErrorBoundaryLayout>
            </div>
        </div>
    )
}

export default App
