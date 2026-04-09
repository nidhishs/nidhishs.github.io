import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type DateFormat = 'day-month' | 'day-month-year' | 'long'

export function formatDate(dateStr: string, format: DateFormat) {
  const [yyyy, mm, dd] = dateStr.split('-').map(Number)

  if (format === 'day-month') {
    return `${String(dd).padStart(2, '0')}/${String(mm).padStart(2, '0')}`
  }

  if (format === 'day-month-year') {
    return `${String(dd).padStart(2, '0')}/${String(mm).padStart(2, '0')}/${yyyy}`
  }

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(yyyy, mm - 1, dd))
}
