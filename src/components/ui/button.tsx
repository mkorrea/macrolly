import clsx from "clsx";
import { useState, type ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  animate?: boolean;
  size?: "sm" | "md" | "lg" | "responsive";
  icon?: React.ElementType;
  children: string;
  className?: string;
  variant?: "primary" | "secondary";
}

const sizeStyles = {
  sm:  "px-4 h-8 gap-x-1 text-sm",
  md:  "px-6 h-10 gap-x-2 text-sm",
  lg:  "px-8 h-12 gap-x-2 rounded-xl text-base",

  responsive: `
    px-4 h-8 gap-x-1 text-sm
    md:px-6 md:h-10 md:gap-x-2 md:text-sm
    lg:px-8 lg:h-12 lg:gap-x-2 lg:rounded-xl lg:text-base
  `,
}

export function Button({
  animate,
  size = "md",
  icon: Icon,
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

  return (
    <button
      {...props}
      onMouseUp={showMouseReleaseClickBounceAnimation}
      className={clsx(
        "inline-flex justify-center items-center text-white rounded-md cursor-pointer text-shadow-sm hover:brightness-105 active:scale-95 transition-all",
        sizeStyles[size],
        variant === "primary" && "bg-linear-to-br from-secondary to-primary",
        variant === "secondary" && "bg-accent",
        isAnimating && "animate-click",
        className,
      )}
    >
      {Icon && (
        <Icon
          weight="fill"
          className={clsx(
            "drop-shadow-sm",
            size === "sm" && "w-4 h-4 -ml-1 ",
            size === "md" && "w-5 h-5 -ml-1 ",
            size === "lg" && "w-6 h-6 -ml-2 ",
          )}
        />
      )}
      {children}
    </button>
  );
}
