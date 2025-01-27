import { PropsBase } from '../../../models.ts';

interface VisuallyHiddenProps extends PropsBase {
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
