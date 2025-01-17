import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar.tsx';

describe('Navbar manual styling', () => {
  it('sets background to new color when passed bgColor', () => {
    render(<Navbar bgColor="red" />);
    const navbar = screen.getByRole('navigation');

    expect(navbar).toHaveStyle({ 'background-color': 'rgb(255, 0, 0)' });
  });

  it('sets text to new color when passed color', () => {
    render(<Navbar color="blue" />);
    const navbar = screen.getByRole('navigation');

    expect(navbar).toHaveStyle({ color: 'rgb(0, 0, 255)' });
  });
});

describe('Shadow on Navbar', () => {
  it('adds a shadow when shadow is set to true', () => {
    render(<Navbar shadow />);
    const navbar = screen.getByRole('navigation');

    expect(navbar).toHaveClass('navbar-shadow');
  });

  it('does not add a shadow when shadow is set to false', () => {
    render(<Navbar shadow={false} />);
    const navbar = screen.getByRole('navigation');

    expect(navbar).not.toHaveClass('navbar-shadow');
  });

  it('does not add a shadow by default', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');

    expect(navbar).not.toHaveClass('navbar-shadow');
  });
});

describe('Navbar left and right content', () => {
  it('renders left content', () => {
    render(<Navbar left={<p>Left</p>} />);
    const left = screen.getByText('Left');

    expect(left).toBeInTheDocument();
  });

  it('renders right content', () => {
    render(<Navbar right={<p>Right</p>} />);
    const right = screen.getByText('Right');

    expect(right).toBeInTheDocument();
  });

  it('renders both left and right content', () => {
    render(<Navbar left={<p>Left</p>} right={<p>Right</p>} />);
    const left = screen.getByText('Left');
    const right = screen.getByText('Right');

    expect(left).toBeInTheDocument();
    expect(right).toBeInTheDocument();
  });

  it('renders left content first and right content second', () => {
    render(<Navbar left={<p>Left</p>} right={<p>Right</p>} />);
    const nav = screen.getByRole('navigation');
    const left = nav.querySelector('div:first-child');
    const right = nav.querySelector('div:last-child');

    expect(left).toHaveTextContent('Left');
    expect(right).toHaveTextContent('Right');
  });

  it('renders right content second even when there is no left content', () => {
    render(<Navbar right={<p>Right</p>} />);
    const nav = screen.getByRole('navigation');
    const left = nav.querySelector('div:first-child');
    const right = nav.querySelector('div:last-child');

    expect(left).not.toHaveTextContent('Right');
    expect(right).toHaveTextContent('Right');
  });
});
