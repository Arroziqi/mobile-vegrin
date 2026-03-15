import {
  RegisterErrorResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/libs/submodules/auth/types/register.type'
import { ApiResponse } from '@/libs/store/types/service.type'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { fetchWithTimeout } from '@/libs/common/helper/fetchWithTimeout'
import { ApiError } from '@/libs/common/types/error'

export const registerUsecase = async (payload: RegisterRequest) => {
  const response = await fetchWithTimeout(
    API_ENDPOINTS.AUTH.REGISTER,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
    15_000
  )

  const responseJson: ApiResponse<RegisterResponse | RegisterErrorResponse> =
    await response.json()

  // business error
  if (!response.ok || !responseJson.success) {
    throw new ApiError(responseJson.code, responseJson.message)
  }

  return responseJson.data
}
