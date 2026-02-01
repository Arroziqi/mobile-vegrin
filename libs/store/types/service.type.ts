// services/types/service.types.ts

// ============ Common Types ============
export interface ApiResponse<T> {
  success: boolean
  code: number
  message: string
  data: T
}

export interface ApiError {
  success: boolean
  message: string
  error: string
  statusCode: number
}

// ============ Auth Types ============
export interface LoginRequest {
  email: string
  password: string
  device_id?: string
  device_name?: string
  is_lifetime?: boolean
}

export interface UserSession {
  id: string
  user_id: string
  token: string
  device_id: string
  device_name: string
  login_at?: string
  duration_hours?: number
  is_lifetime?: boolean
}

export interface LoginResponse {
  message: string
  user_session: UserSession
}

export interface GoogleLoginRequest {
  id_token: string
  device_id: string
  device_name: string
}

export interface GoogleLoginResponse {
  message: string
  user_session: {
    id: string
    user_id: string
    token: string
    device_id: string
    device_name: string
    login_at: string
    duration_hours: number
    is_lifetime: boolean
  }
}

export interface LogoutResponse {
  id: string
  username: string
  email: string
  password: string
  token: string | null
}

export interface VerifyEmailRequest {
  email: string
}

export interface VerifyEmailResponse {
  message: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
}

export interface ResetPasswordResponse {
  message: string
}

// ============ Profile Types ============
export interface UserProfile {
  id: string
  user_id: string
  email: string
  front_name: string
  back_name: string
  photo_profile: string | null
  telephone_number: string
  address: string
  birth_date: string
  registered_at: string
  verification_at: string | null
  is_verify: boolean
}

export interface GetProfileResponse {
  message: string
  user: UserProfile
}

export interface UpdateProfileRequest {
  front_name?: string
  back_name?: string
  address?: string
  phone_number?: string
  birth_date?: string
}

// ============ Weather Types ============
export interface WeatherQuery {
  lat: string
  lon: string
}

export interface WeatherResponse {
  message: string
  weather: {
    name: string
    local_datetime: string
    temperature: number
    minimal_temperature: number
    maximal_temperature: number
    humidity: number
    total_cloud_cover: number
    curah_hujan: number
    icon: string
    wind_direction: number
    wind_speed: number
  }
}

// ============ Plant Types ============
export interface PlantAnalyzeRequest {
  image_file: File | Blob
}

export interface PlantAnalyzeResponse {
  message: string
  log_data: PlantLogData
}

export interface PlantLogData {
  id: string
  user_id?: string
  plant_name: string
  plant_image: string
  condition: string
  diagnosis: string
  detail: {
    is_plant: boolean
    symptoms: string[]
    treatment: {
      organic: string
      chemical: string
    }
    confidence: number
  }
}

export interface PlantLogsResponse {
  message: string
  log_data: PlantLogData
}

export interface PlantDetailResponse {
  message: string
  log_data: PlantLogData
}

// ============ Request Headers ============
export interface AuthHeaders {
  vtoken?: string
  device_id?: string
}
