import { IResponse } from "../_common/common.dto"
import { ApiService } from "../api.service"
import { ICurrentUser } from "../login/login.dto"
import { IRegisterDto } from "./register.dto"

export const RegisterService = {
    registerWithEmail: async (dto: IRegisterDto) => {
        const { data } = await ApiService.post<IResponse<ICurrentUser>>("/v1/auth/register", dto)
        return data
    },
}
