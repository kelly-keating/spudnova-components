import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import FlexGrid from './FlexGrid.tsx';

describe('FlexGrid component', () => {
  it('renders with children', () => {
    render(
      <FlexGrid>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </FlexGrid>
    );

    const flexGrid = screen.getByRole('group');
    const child1 = screen.getByText('Child 1');
    const child2 = screen.getByText('Child 2');
    const child3 = screen.getByText('Child 3');

    expect(flexGrid).toBeInTheDocument();
    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
    expect(child3).toBeInTheDocument();

    expect(flexGrid).toContainElement(child1);
    expect(flexGrid).toContainElement(child2);
    expect(flexGrid).toContainElement(child3);
  });

  it('renders with custom className', () => {
    render(
      <FlexGrid className="custom-class">
        <div>Child 1</div>
        <div>Child 2</div>
      </FlexGrid>
    );

    const flexGrid = screen.getByRole('group');

    expect(flexGrid).toHaveClass('custom-class');
  });
});
