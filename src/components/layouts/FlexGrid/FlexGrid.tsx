interface FlexGridProps {
  children: React.ReactNode;
}

function FlexGrid({ children }: FlexGridProps) {
  return <div className="flex-grid">{children}</div>;
}

export default FlexGrid;
