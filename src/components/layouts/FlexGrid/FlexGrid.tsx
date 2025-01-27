interface FlexGridProps {
  children: React.ReactNode;
}

// TODO: sort centering at small sizes
function FlexGrid({ children }: FlexGridProps) {
  return (
    <div className="flex-grid" role="group">
      {children}
    </div>
  );
}

export default FlexGrid;
