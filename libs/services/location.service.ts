// services/device.ts

import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'

interface props {
  body: {
    device_id: string
    device_name: string
    lat: number
    lon: number
  }
  token: string
}

export const createDevice = async ({ body, token }: props) => {
  const response = await fetch(API_ENDPOINTS.USER.CREATE_DEVICE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      vtoken: token,
      device_id: body.device_id,
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error('Failed to create device')
  }

  return response.json()
}
