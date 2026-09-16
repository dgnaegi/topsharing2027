const API_URL = import.meta.env.VITE_API_URL || ''

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message)
  }
}

export async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}/api/v1${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    const message = data?.error?.message || 'Da ist etwas schiefgelaufen.'
    throw new ApiError(message, res.status)
  }

  return data as T
}
