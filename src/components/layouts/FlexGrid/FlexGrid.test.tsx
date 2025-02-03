import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import FlexGrid from './FlexGrid.tsx';

describe('FlexGrid - accessibility', () => {
  describe('When rendered in the default state', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <FlexGrid>
          <div>Child</div>
        </FlexGrid>
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});

const defaultClassName = 'flex-grid';
describe(`FlexGrid - custom classes`, () => {
  describe('When a className is provided', () => {
    it('The className is applied to the FlexGrid container alongside the default class', () => {
      render(
        <FlexGrid className="custom-class">
          <div>Child</div>
        </FlexGrid>
      );

      const flexGrid = screen.getByRole('group');
      expect(flexGrid).toHaveClass(defaultClassName);
      expect(flexGrid).toHaveClass('custom-class');
    });
  });

  describe('When no className is provided', () => {
    it('Then only the default class is applied', () => {
      render(
        <FlexGrid>
          <div>Child</div>
        </FlexGrid>
      );

      const flexGrid = screen.getByRole('group');
      expect(flexGrid).toHaveClass(defaultClassName);
      expect(flexGrid).not.toHaveClass('custom-class');
    });
  });
});

describe('FlexGrid - component stories', () => {
  describe('When children are provided', () => {
    it('The children render inside the FlexGrid', () => {
      render(
        <FlexGrid>
          <div>Child 1</div>
          <div>Child 2</div>
        </FlexGrid>
      );

      const flexGrid = screen.getByRole('group');
      const child1 = screen.getByText('Child 1');
      const child2 = screen.getByText('Child 2');

      expect(flexGrid).toBeInTheDocument();
      expect(child1).toBeInTheDocument();
      expect(child2).toBeInTheDocument();

      expect(flexGrid).toContainElement(child1);
      expect(flexGrid).toContainElement(child2);
    });
  });
});
