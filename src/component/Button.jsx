import React from "react"
import { cn } from "../lib/cn"

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(

        "flex items-center justify-center px-3 py-1.5 rounded-lg text-sm font-medium",
        "bg-gradient-to-r from-[#845CC0] to-[#9B6DDE] text-white",
        "hover:opacity-90 transition-colors",
        "disabled:opacity-50 disabled:pointer-events-none",
      
        className
      )}
      {...props}
    />
  )
}
