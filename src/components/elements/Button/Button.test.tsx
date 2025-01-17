import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Button, { ButtonVariant } from './Button.tsx';

describe('Button renders', () => {
  it('with correct role and default type', () => {
    render(<Button onClick={() => {}}>Click Me!</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('with default text', () => {
    render(<Button onClick={() => {}} />);
    const button = screen.getByText('Click Me!');

    expect(button).toBeInTheDocument();
  });

  it('with child text', () => {
    render(<Button onClick={() => {}}>Click Me!</Button>);
    const button = screen.getByText('Click Me!');

    expect(button).toBeInTheDocument();
  });

  it('with children', () => {
    render(
      <Button onClick={() => {}}>
        <img src="icon.png" alt="icon" />
      </Button>
    );
    const img = screen.getByRole('button').querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'icon.png');
  });

  it('as submit button', () => {
    render(<Button onClick={() => {}} submit />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  it('as disabled button', () => {
    render(<Button onClick={() => {}} disabled />);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('Button is clicked', () => {
  it('calls given onClick function', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click Me!</Button>);
    const button = screen.getByRole('button');

    button.click();

    expect(onClick).toHaveBeenCalled();
  });

  it('does not call onClick function when disabled', () => {
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

describe('Variant passed to Button', () => {
  it.each([
    ['primary', 'btn-primary'],
    ['success', 'btn-success'],
    ['danger', 'btn-danger'],
    ['ghost', 'btn-ghost'],
  ])('renders %s variant class', (variant, className) => {
    render(
      <Button onClick={() => {}} variant={variant as ButtonVariant}>
        Click Me!
      </Button>
    );
    const button = screen.getByRole('button');

    expect(button).toHaveClass(className);
  });
});
