"use client"

import React from "react"
import { cn } from "../../lib/cn"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `
          rounded-xl flex flex-col items-center shrink-0 justify-center gap-2 border border-gray-200 dark:border-gray-700
          bg-white  shadow-sm hover:shadow-md
          transition-all duration-200
          `,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
);

Card.displayName = "Card";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  )
}
