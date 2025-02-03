import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/react';

import Button from './Button.tsx';
import * as stories from './Button.stories.tsx';

describe('Button - accessibility', () => {
  describe('When rendered in the default state', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Button onClick={() => {}} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});

const defaultClassName = 'btn';
describe('Button - custom classes', () => {
  describe('When a className is provided', () => {
    it('The className is applied to the Button alongside the default class', () => {
      render(<Button onClick={() => {}} className="custom-class" />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass(defaultClassName);
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('When no className is provided', () => {
    it('Then only the default class is applied', () => {
      render(<Button onClick={() => {}} />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass(defaultClassName);
      expect(button).not.toHaveClass('custom-class');
    });
  });
});

const { Default, Primary, Ghost, Danger, Success, Disabled, Submit } =
  composeStories(stories);
describe('Button - component stories', () => {
  it('renders Default story', () => {
    const { container } = render(Default());
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me!');
    expect(container).toMatchSnapshot();
  });

  it('renders Primary story', () => {
    const { container } = render(Primary());
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Primary Button');
    expect(button).toHaveClass('btn-primary');
    expect(container).toMatchSnapshot();
  });

  it('renders Ghost story', () => {
    const { container } = render(Ghost());
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Ghost Button');
    expect(button).toHaveClass('btn-ghost');
    expect(container).toMatchSnapshot();
  });

  it('renders Danger story', () => {
    const { container } = render(Danger());
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Danger Button');
    expect(button).toHaveClass('btn-danger');
    expect(container).toMatchSnapshot();
  });

  it('renders Success story', () => {
    const { container } = render(Success());
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Success Button');
    expect(button).toHaveClass('btn-success');
    expect(container).toMatchSnapshot();
  });

  it('renders Disabled story', () => {
    const { container } = render(Disabled());
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Disabled Button');
    expect(button).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('renders Submit story', () => {
    const { container } = render(Submit());
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Submit Button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(container).toMatchSnapshot();
  });
});

describe('Button - functionality', () => {
  describe('When the Button is clicked', () => {
    it('Then calls given function', () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Click Me!</Button>);
      const button = screen.getByRole('button');

      button.click();

      expect(onClick).toHaveBeenCalled();
    });

    it('Then does not call function if disabled', () => {
      const onClick = vi.fn();
      render(
        <Button onClick={onClick} disabled>
          Click Me!
        </Button>
      );
      const button = screen.getByRole('button');

      button.click();

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
