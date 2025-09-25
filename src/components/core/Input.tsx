import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helper,
  leftIcon,
  rightIcon,
  className = "",
  id,
  ...props
}) => {
  const baseClasses =
    "block w-full rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-[var(--background)] bg-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]";
  const normalClasses =
    "border-[var(--border)] focus:border-[var(--ring)] focus:ring-[var(--ring)]";
  const errorClasses =
    "border-[var(--destructive)] focus:border-[var(--destructive)] focus:ring-[var(--destructive)]";
  const paddingClasses = leftIcon || rightIcon ? "px-10 py-2" : "px-3 py-2";

  const inputClasses = `${baseClasses} ${
    error ? errorClasses : normalClasses
  } ${paddingClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-[var(--muted-foreground)]">{leftIcon}</div>
          </div>
        )}

        <input className={inputClasses} {...props} />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="text-[var(--muted-foreground)]">{rightIcon}</div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-[var(--destructive)]">{error}</p>
      )}

      {helper && !error && (
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">{helper}</p>
      )}
    </div>
  );
};

export default Input;
