import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
