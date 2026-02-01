export class ApiError extends Error {
  constructor(
    public code: number,
    message: string
  ) {
    super(message)
  }
}

export class NetworkError extends Error {}
export class TimeoutError extends Error {}
