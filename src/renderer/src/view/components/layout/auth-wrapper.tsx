import { QUERY_KEYS } from "@renderer/config/query.config"
import { useQuery } from "@tanstack/react-query"
import { PropsWithChildren, useEffect } from "react"
import { LoginService } from "../../../service/login/login.service"
import { useUserStore } from "../../../store/user.store"
import MyLoading from "../common/my-loading"

export default function AuthWrapper({ children }: PropsWithChildren) {
    const { setCurrentUser, logout, loading } = useUserStore()
    const { data, error } = useQuery({
        queryKey: [QUERY_KEYS.CURRENT_USER],

        queryFn: () => {
            return LoginService.getLoggedInUser()
        },
        retry: false,
        select: (response) => {
            const user = response?.data?.response
            return user || undefined
        }
    })

    useEffect(() => {
        if (data) {
            setCurrentUser(data)
        }
        if (error) {
            logout()
        }
    }, [data, error])

    // error
    // if (error) {
    //     console.log("error in app wrapper: ", { error: (error as Error)?.message })
    //     return <>{children}</>
    // }

    // loading
    if (loading) {
        return <MyLoading />
    }
    // done
    return <>{children}</>
}
