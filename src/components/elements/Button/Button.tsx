export type ButtonVariant = 'ghost' | 'danger' | 'primary' | 'success';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  submit?: boolean;
  onClick: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
}

function Button({
  children,
  className,
  submit = false,
  onClick,
  disabled,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`${className} btn btn-${variant}`}
    >
      {children || 'Click Me!'}
    </button>
  );
}

export default Button;
