import { IResponse } from "../_common/common.dto"
import { ApiService } from "../api.service"
import { ICurrentUser, ILoginWithEmailDto } from "./login.dto"

export const LoginService = {
    // api call with axios
    loginWithEmail: async (dto: ILoginWithEmailDto) => {
        const { data } = await ApiService.post<IResponse<ICurrentUser>>("/v1/auth/login-with-email", dto)
        return data.response
    },
    getLoggedInUser: () => {
        return ApiService.post<IResponse<ICurrentUser>>("/v1/user")
    },
    logoutUser: async () => {
        await ApiService.post("/v1/auth/logout")
    }
}
