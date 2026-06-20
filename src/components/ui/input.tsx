import clsx from "clsx";
import {
  forwardRef,
  useState,
  type ComponentProps,
  type ComponentType,
} from "react";

interface InputProps
  extends Omit<ComponentProps<"input">, "size"> {
  label?: string;

  leftIcon?: ComponentType<{ className?: string }>;
  rightIcon?: ComponentType<{ className?: string }>;

  leftIconClassName?: string;
  rightIconClassName?: string;

  helperText?: string;
  errorMessage?: string;

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,

      leftIcon: LeftIcon,
      rightIcon: RightIcon,

      leftIconClassName,
      rightIconClassName,

      helperText,
      errorMessage,

      size = "md",

      className,

      fullWidth = true,

      disabled,

      ...props
    },

    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const sizes = {
      sm: {
        container: "h-8 px-3 gap-2 rounded-lg",
        icon: "size-4",
        input: "text-sm",
      },

      md: {
        container: "h-9 px-3.5 gap-2 rounded-xl",
        icon: "size-4",
        input: "text-sm",
      },

      lg: {
        container: "h-10 px-4 gap-2 rounded-xl",
        icon: "size-5",
        input: "text-sm",
      },
    };

    return (
      <div
        className={clsx(
          "flex flex-col gap-1.5",
          fullWidth && "w-full",
        )}
      >
        {label && (
          <label className="text-sm font-medium text-text">
            {label}
          </label>
        )}

        <div
          className={clsx(
            "flex items-center border border-border transition-all duration-150",

            sizes[size].container,

            fullWidth && "w-full",

            disabled && "opacity-60 cursor-not-allowed",

            errorMessage
              ? "border-brand"
              : isFocused
              ? "border-brand shadow-button shadow-brand/20"
              : "border-border",

            "bg-surface",
          )}
        >
          {LeftIcon && (
            <LeftIcon
              className={clsx(
                sizes[size].icon,
                "text-text-soft shrink-0",
                leftIconClassName,
              )}
            />
          )}

          <input
            ref={ref}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={clsx(
              "flex-1 bg-transparent outline-none placeholder:text-muted",

              sizes[size].input,

              "text-text",

              disabled && "cursor-not-allowed",

              className,
            )}
            {...props}
          />

          {RightIcon && (
            <RightIcon
              className={clsx(
                sizes[size].icon,
                "text-muted shrink-0",
                rightIconClassName,
              )}
            />
          )}
        </div>

        {(errorMessage || helperText) && (
          <span
            className={clsx(
              "text-xs",

              errorMessage
                ? "text-brand"
                : "text-muted",
            )}
          >
            {errorMessage ?? helperText}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";