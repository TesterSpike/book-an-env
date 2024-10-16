export function formatDateForDatabase(_date: Date): string {
  return `${_date.getFullYear()}-${(_date.getMonth() + 1).toString().padStart(2, '0')}-${(_date.getDate()).toString().padStart(2, '0')}`
}