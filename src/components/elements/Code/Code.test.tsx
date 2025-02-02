import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/react';

import Code from './Code.tsx';
import * as stories from './Code.stories.tsx';

describe('Code - accessibility', () => {
  describe('When rendered in the default state', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Code />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});

const defaultClassName = 'code-block';
describe('Code - custom classNames', () => {
  describe('When a className is provided', () => {
    it('The className is applied to the Code alongside the default class', () => {
      render(<Code className="custom-class" />);

      const code = screen.getByRole('code');
      const codeContainer = code.parentElement;

      expect(codeContainer).toHaveClass(defaultClassName);
      expect(codeContainer).toHaveClass('custom-class');
    });
  });

  describe('When no className is provided', () => {
    it('Then only the default class is applied', () => {
      render(<Code />);

      const code = screen.getByRole('code');
      const codeContainer = code.parentElement;

      expect(codeContainer).toHaveClass(defaultClassName);
      expect(codeContainer).not.toHaveClass('custom-class');
    });
  });
});

const { Default, CodeLines, Children, ChildrenAndCodeLines } =
  composeStories(stories);
describe('Given the Code component', () => {
  describe('When no code is provided', () => {
    it('Then it renders the default code prompt', () => {
      render(<Default />);
      const code = screen.getByRole('code');

      expect(code).toBeInTheDocument();
      expect(code).toHaveTextContent('// Supply code');
    });
  });

  describe('When children are provided', () => {
    it('Then it renders the children', () => {
      render(<Children />);
      const code = screen.getByRole('code');

      expect(code).toBeInTheDocument();
      expect(code).toHaveTextContent('const str = "Hello World!";');
    });
  });

  describe('When codeLines are provided', () => {
    it('Then it renders the codeLines', () => {
      render(<CodeLines />);
      const code = screen.getByRole('code');

      expect(code).toBeInTheDocument();
      expect(code).toHaveTextContent(
        'const greeting = "Hello World!"; console.log(greeting);'
      );
    });
  });

  describe('When children and codeLines are provided', () => {
    it('Then it renders the codeLines', () => {
      render(<ChildrenAndCodeLines />);
      const code = screen.getByRole('code');

      expect(code).toBeInTheDocument();
      expect(code).toHaveTextContent(
        'const greeting = "Hello World!"; console.log(greeting);'
      );
    });
  });
});
