import { IResponse } from '../_common/common.dto'
import { ApiService } from '../api.service'
import { IForgetPasswordSchema, IResetPasswordSchema } from './forget-password.schema'

export const ForgetPasswordService = {
  // api call with axios
  getForgetPasswordCodeViaEmail: async (dto: IForgetPasswordSchema) => {
    const { data } = await ApiService.get<IResponse<undefined>>(
      '/v1/auth/forget-password' + '/' + dto.email
    )
    return data
  },
  resetPassword: async (schema: IResetPasswordSchema) => {
    const result = await ApiService.post<IResponse<undefined>>('/v1/auth/forget-password', {
      code: schema.code,
      password: schema.password
    })
    return result.data
  }
}
