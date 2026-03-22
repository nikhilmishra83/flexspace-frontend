import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-zinc-800",
        outline: "border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        ghost: "hover:bg-zinc-100 text-zinc-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  fullWidth?: boolean // Added this back properly
}

function Button({ className, variant, size, asChild = false, fullWidth, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }), fullWidth && "w-full")}
      {...props}
    />
  )
}

export { Button, buttonVariants }