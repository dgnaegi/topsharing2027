export const MAX_IMAGE_BYTES = 10 * 1024 * 1024 // 10 MB, muss zum Backend-Limit passen
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}
