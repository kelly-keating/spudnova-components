import { PropsBase } from '../../../models.ts';

type FlexGridProps = PropsBase;

// TODO: sort centering at small sizes
function FlexGrid({ children, className }: FlexGridProps) {
  return (
    <div className={`${className || ''} flex-grid`} role="group">
      {children}
    </div>
  );
}

export default FlexGrid;
