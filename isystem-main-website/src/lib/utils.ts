import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names and merges Tailwind classes efficiently
 * Used throughout the application for component styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}