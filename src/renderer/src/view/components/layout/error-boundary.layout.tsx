import ErrorPage from "@renderer/view/pages/error/error.page"
import { PropsWithChildren } from "react"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"

export default function MyErrorBoundaryLayout({ children }: PropsWithChildren) {
    const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
        return <ErrorPage error={error as Error} resetErrorBoundary={resetErrorBoundary} />
    }

    return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
}
