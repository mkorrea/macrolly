interface ButtonProps {
  size: "sm" | "md" | "lg"
}

export function Button({ size }: ButtonProps) {
  return (
    <button 
      className="bg-linear-to-r from-secondary to-primary px-4 text-sm lg:text-base rounded-md"
    >
      Comece Agora
    </button>
  )
}