import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import VisuallyHidden from './VisuallyHidden.tsx';

describe('VisuallyHidden component', () => {
  it('renders with children', () => {
    render(<VisuallyHidden>Hidden Text</VisuallyHidden>);

    const visuallyHidden = screen.getByText('Hidden Text');

    expect(visuallyHidden).toBeInTheDocument();
    expect(visuallyHidden).toHaveStyle({
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap',
      border: '0',
    });
  });

  it('renders with custom element', () => {
    render(<VisuallyHidden as="label">Hidden Text</VisuallyHidden>);

    const visuallyHidden = screen.getByText('Hidden Text');

    expect(visuallyHidden).toHaveAttribute('as', 'label');
  });

  it('renders with custom className', () => {
    render(
      <VisuallyHidden className="custom-class">Hidden Text</VisuallyHidden>
    );

    const visuallyHidden = screen.getByText('Hidden Text');

    expect(visuallyHidden).toHaveClass('custom-class');
  });
});
