import clsx from "clsx";
import { useState, type ComponentProps, type ComponentType } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  icon?: ComponentType<{ className?: string }>
  iconClassName?: string;
  isIconOnly?: boolean

  animate?: boolean;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function Button({
  icon: Icon,
  iconClassName,
  isIconOnly = false,
  animate,
  size = "md",
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  function showMouseReleaseClickBounceAnimation() {
    if (animate) {
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }
  }

  const sizeStyles = {
    sm: clsx("h-8 px-4 gap-1", Icon && !isIconOnly && "pl-3"),
    md: clsx("h-9 px-5 gap-1.5", Icon && !isIconOnly && "pl-3.5"),
    lg: clsx("h-10 px-6 gap-1.5", Icon && !isIconOnly && "pl-4.5"),
  };
  const iconSizes = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5",
  };

  const variants = {
    primary:
      " bg-brand text-white  shadow-button shadow-brand/20 hover:bg-brand-hover hover:shadow-brand-hover/20  disabled:bg-brand-disabled  ",
    secondary:
      "bg-surface-soft border border-border  text-text hover:bg-surface hover:shadow-button hover:shadow-black/5  disabled:bg-surface-soft disabled:opacity-60 ",
    outline:
      " bg-transparent border border-border text-brand hover:bg-brand-soft hover:border-brand disabled:bg-transparent disabled:border-border disabled:opacity-60  ",
    ghost:
      " text-text hover:bg-surface-soft hover:shadow-button hover:shadow-black/5  disabled:text-muted disabled:bg-transparent disabled:shadow-none ",
  };

  return (
    <button
      {...props}
      onMouseUp={showMouseReleaseClickBounceAnimation}
      className={clsx(
        "inline-flex justify-center items-center text-sm font-medium rounded-xl cursor-pointer active:scale-98 transition-all duration-150  disabled:opacity-70  disabled:cursor-not-allowed disabled:active:scale-100",
        sizeStyles[size],
        variants[variant],
        isAnimating && "animate-click",
        className,
      )}
    >
      {Icon && (
        <Icon 
          className={clsx(
            iconSizes[size],
            variant === "ghost" && "text-brand",
            iconClassName
          )}
        />
      )}
      {children}
    </button>
  );
}
