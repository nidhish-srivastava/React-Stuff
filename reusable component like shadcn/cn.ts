import clsx from "clsx"
import { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


// tailwind merge used for overriding the existing classname. The way css cascading works,it wont be overridden,so we use this way 
export function cn(...inputs : ClassValue[]){
    return twMerge(clsx(inputs))
}