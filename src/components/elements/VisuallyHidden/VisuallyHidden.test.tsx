import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/react';

import VisuallyHidden from './VisuallyHidden.tsx';
import * as stories from './VisuallyHidden.stories.tsx';

describe('VisuallyHidden - accessibility', () => {
  describe('When rendered with children', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <VisuallyHidden>Hidden Text</VisuallyHidden>
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});

const defaultClassName = 'visually-hidden';
describe('VisuallyHidden - custom classNames', () => {
  describe('When a className is provided', () => {
    it('The className is applied to the VisuallyHidden alongside the default class', () => {
      render(
        <VisuallyHidden className="custom-class">Hidden Text</VisuallyHidden>
      );

      const visuallyHidden = screen.getByText('Hidden Text');
      expect(visuallyHidden).toHaveClass(defaultClassName);
      expect(visuallyHidden).toHaveClass('custom-class');
    });
  });

  describe('When no className is provided', () => {
    it('Then only the default class is applied', () => {
      render(<VisuallyHidden>Hidden Text</VisuallyHidden>);

      const visuallyHidden = screen.getByText('Hidden Text');
      expect(visuallyHidden).toHaveClass(defaultClassName);
      expect(visuallyHidden).not.toHaveClass('custom-class');
    });
  });
});

const { Default, SpanElement, DivElement, LabelElement, ComplexContent } =
  composeStories(stories);
describe('Given the VisuallyHidden component', () => {
  describe('When the VisuallyHidden is rendered', () => {
    it('Then it renders the default VisuallyHidden', () => {
      render(<Default />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
    });

    it('Then it renders the VisuallyHidden with a span element', () => {
      render(<SpanElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden.tagName).toBe('SPAN');
    });

    it('Then it renders the VisuallyHidden with a div element', () => {
      render(<DivElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden.tagName).toBe('DIV');
    });

    it('Then it renders the VisuallyHidden with a label element', () => {
      render(<LabelElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden.tagName).toBe('LABEL');
    });

    it('Then it renders the VisuallyHidden with complex content', () => {
      render(<ComplexContent />);
      const visuallyHidden = screen.getByText('Hidden Text');
      const button = screen.getByRole('button');

      expect(visuallyHidden).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
