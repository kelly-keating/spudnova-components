interface VisuallyHiddenProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'div' | 'label';
}

function VisuallyHidden({
  children,
  className = '',
  as: Component = 'span',
}: VisuallyHiddenProps) {
  return (
    <Component className={`${className} visually-hidden`}>{children}</Component>
  );
}

export default VisuallyHidden;
