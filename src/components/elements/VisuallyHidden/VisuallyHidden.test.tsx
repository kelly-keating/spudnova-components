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
describe('VisuallyHidden - custom classes', () => {
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
describe('VisuallyHidden - component stories', () => {
  describe('When the VisuallyHidden is rendered with default props', () => {
    it('Then the text is still rendered', () => {
      render(<Default />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden).toBeVisible();
    });

    it('Then the text is in a span', () => {
      render(<Default />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden.tagName).toBe('SPAN');
    });
  });

  describe('When the VisuallyHidden is defined as a span', () => {
    it('Then the text is still rendered', () => {
      render(<SpanElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden).toBeVisible();
    });

    it('Then the text is in a span', () => {
      render(<SpanElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden.tagName).toBe('SPAN');
    });
  });

  describe('When the VisuallyHidden is defined as a div', () => {
    it('Then the text is still rendered', () => {
      render(<DivElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden).toBeVisible();
    });

    it('Then the text is in a div', () => {
      render(<DivElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden.tagName).toBe('DIV');
    });
  });

  describe('When the VisuallyHidden is defined as a label', () => {
    it('Then the text is still rendered', () => {
      render(<LabelElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden).toBeVisible();
    });

    it('Then the text is in a label', () => {
      render(<LabelElement />);
      const visuallyHidden = screen.getByText('Hidden Text');

      expect(visuallyHidden.tagName).toBe('LABEL');
    });
  });

  describe('When the VisuallyHidden is rendered with complex content', () => {
    it('Then the content is rendered', () => {
      render(<ComplexContent />);
      const button = screen.getByRole('button', { name: 'Hidden Text' });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });
  });
});
