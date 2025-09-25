import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  children,
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-[rgb(var(--color-background)/1)]";

  const variantClasses = {
    primary:
      "bg-[rgb(var(--color-primary)/1)] text-[rgb(var(--color-primary-foreground)/1)] hover:brightness-110 focus-visible:ring-[rgb(var(--color-primary)/0.5)]",
    secondary:
      "bg-[rgb(var(--color-secondary)/1)] text-[rgb(var(--color-secondary-foreground)/1)] hover:bg-[rgb(var(--color-secondary)/0.85)] focus-visible:ring-[rgb(var(--color-secondary)/0.4)]",
    ghost:
      "bg-transparent text-[rgb(var(--color-foreground)/0.75)] hover:bg-[rgb(var(--color-muted)/0.6)] hover:text-[rgb(var(--color-foreground)/1)] focus-visible:ring-[rgb(var(--color-muted)/0.5)]",
    destructive:
      "bg-[rgb(var(--color-destructive)/1)] text-[rgb(var(--color-destructive-foreground)/1)] hover:brightness-110 focus-visible:ring-[rgb(var(--color-destructive)/0.5)]",
  } as const;

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading && (
        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
