export const ErrorCode = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
} as const

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode]

const defaultMessages: Record<ErrorCode, string> = {
  VALIDATION_ERROR: 'Bitte prüf deine Eingaben.',
  NOT_FOUND: 'Diese Seite gibt es nicht.',
}

export class AppError extends Error {
  constructor(
    public readonly code: ErrorCode,
    public readonly status: number,
    message?: string,
  ) {
    super(message ?? defaultMessages[code])
  }
}
