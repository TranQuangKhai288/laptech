import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
}) => {
  const baseClasses =
    "rounded-lg border transition-shadow duration-200 bg-[var(--color-card)] text-[var(--color-card-foreground)] border-[var(--color-border)/1]";

  const variantClasses = {
    default: "shadow-sm hover:shadow-md",
    elevated: "shadow-lg hover:shadow-xl",
    glass:
      "backdrop-blur-sm bg-[var(--color-card)] border-[var(--color-border)] shadow-sm",
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
