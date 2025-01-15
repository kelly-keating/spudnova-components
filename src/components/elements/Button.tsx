interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "ghost" | "danger" | "primary" | "success";
}

function Button ({ children, onClick, disabled, variant }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={variant ? "btn btn-"+variant : "btn"}
    >
      {children || "Click Me!"}
    </button>
  )
}

export default Button;
