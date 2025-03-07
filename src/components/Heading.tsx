import { cn } from "@/utils"
import { HTMLAttributes } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-semibold track-light text-zinc-800 font-heading",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
