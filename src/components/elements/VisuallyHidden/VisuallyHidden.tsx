interface VisuallyHiddenProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'label';
}

function VisuallyHidden({
  children,
  as: Component = 'span',
}: VisuallyHiddenProps) {
  return <Component className="visually-hidden">{children}</Component>;
}

export default VisuallyHidden;
