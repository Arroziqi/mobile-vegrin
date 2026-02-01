export interface RegisterRequest {
  email: string
  password: string
  front_name: string
  back_name: string
  address?: string
  phone_number?: string
  birth_date?: string // ISO date string
}

export interface RegisterUserData {
  id: string
  email: string
  front_name: string
  back_name: string
  is_verify: boolean
  registered_at: string
}

export interface RegisterResponse {
  message: string
  user: RegisterUserData
}

export interface RegisterErrorResponse {
  message: string[]
  field: string
}
