import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-brand-navy)] text-white hover:bg-[var(--color-brand-navy-light)] hover:shadow-lg",
      secondary: "bg-[var(--color-brand-gold)] text-white hover:bg-[var(--color-brand-gold-light)] hover:shadow-lg",
      outline: "border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white",
      whatsapp: "bg-[var(--color-brand-accent)] text-white hover:bg-green-500 hover:shadow-lg",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5 text-base font-medium",
      lg: "px-8 py-3.5 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
