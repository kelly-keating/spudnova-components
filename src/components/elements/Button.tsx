interface ButtonProps {
  children: React.ReactNode;
  submit?: boolean;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'ghost' | 'danger' | 'primary' | 'success';
}

function Button({
  children,
  submit = false,
  onClick,
  disabled,
  variant,
}: ButtonProps) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={variant ? `btn btn-${variant}` : 'btn'}
    >
      {children || 'Click Me!'}
    </button>
  );
}

export default Button;
