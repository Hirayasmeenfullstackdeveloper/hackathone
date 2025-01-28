import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to handle class names dynamically and merge conflicting Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to assert that a value is not undefined and throw an error with a message if it is
export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

