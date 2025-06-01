import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "gradient";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5":
              variant === "default",
            "border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 backdrop-blur-sm":
              variant === "outline",
            "hover:bg-gray-100/10 hover:scale-105": variant === "ghost",
            "text-primary underline-offset-4 hover:underline hover:text-primary/80":
              variant === "link",
            "bg-gradient-to-r from-blue-800 to-purple-800 text-white hover:from-blue-700 hover:to-purple-800 hover:scale-105 hover:shadow-lg":
              variant === "gradient",
            "h-10 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-12 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
