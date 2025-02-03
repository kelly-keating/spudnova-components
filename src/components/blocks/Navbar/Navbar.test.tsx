import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/react';

import Navbar from './Navbar.tsx';
import * as stories from './Navbar.stories.tsx';

describe('Navbar - accessibility', () => {
  describe('When rendered in the default state', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Navbar />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('When rendered with custom content', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <Navbar
          left={<p>Left</p>}
          right={<p>Right</p>}
          bgColor="blue"
          color="red"
          shadow
        />
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});

const defaultClassName = 'navbar';
describe('Navbar - custom classes', () => {
  describe('When a className is provided', () => {
    it('The className is applied to the Navbar alongside the default class', () => {
      render(<Navbar className="custom-class" />);

      const navbar = screen.getByRole('navigation');
      expect(navbar).toHaveClass(defaultClassName);
      expect(navbar).toHaveClass('custom-class');
    });
  });

  describe('When no className is provided', () => {
    it('Then only the default class is applied', () => {
      render(<Navbar />);

      const navbar = screen.getByRole('navigation');
      expect(navbar).toHaveClass(defaultClassName);
      expect(navbar).not.toHaveClass('custom-class');
    });
  });
});

const {
  Default,
  LeftItems,
  LeftItemsComplex,
  RightItems,
  RightItemsComplex,
  LeftAndRightItems,
  LeftAndRightItemsComplex,
  BackgroundColor,
  TextColor,
  ShadowYes,
  ShadowNo,
  FullNavbar,
} = composeStories(stories);

describe('Navbar - component stories', () => {
  describe('When the Navbar is created with default props', () => {
    it('Then the Navbar is rendered', () => {
      render(<Default />);
      const navbar = screen.getByRole('navigation');

      expect(navbar).toBeInTheDocument();
      expect(navbar).toBeVisible();
    });

    it('Then the Navbar has the default classes', () => {
      render(<Default />);
      const navbar = screen.getByRole('navigation');

      expect(navbar).toHaveClass('navbar');
      expect(navbar).not.toHaveClass('navbar-shadow');
    });
  });

  describe('When the Navbar is created with left items', () => {
    it('Then simple items appear in the left div', () => {
      render(<LeftItems />);
      const navbar = screen.getByRole('navigation');
      const leftContainer = screen.getByText('Left Items');

      expect(leftContainer).toBeInTheDocument();
      expect(leftContainer).toHaveClass('navbar_left');
      expect(navbar).toContainElement(leftContainer);
    });

    it('Then complex items appear in the left div', () => {
      render(<LeftItemsComplex />);
      const navbar = screen.getByRole('navigation');
      const leftContainer = screen.getByText('Left Item 1').parentElement
        ?.parentElement as HTMLElement;

      expect(leftContainer).toBeInTheDocument();
      expect(leftContainer).toHaveClass('navbar_left');

      expect(navbar).toContainElement(leftContainer);
    });

    it('Then the right div is still rendered', () => {
      render(<LeftItems />);
      const navbar = screen.getByRole('navigation');

      const divs = navbar.querySelectorAll('div');
      expect(divs).toHaveLength(2);
    });
  });

  describe('When the Navbar is created with right items', () => {
    it('Then simple items appear in the right div', () => {
      render(<RightItems />);
      const navbar = screen.getByRole('navigation');
      const rightContainer = screen.getByText('Right Items');

      expect(rightContainer).toBeInTheDocument();
      expect(rightContainer).toHaveClass('navbar_right');
      expect(navbar).toContainElement(rightContainer);
    });

    it('Then complex items appear in the right div', () => {
      render(<RightItemsComplex />);
      const navbar = screen.getByRole('navigation');
      const rightContainer = screen.getByText('Right Item 1').parentElement
        ?.parentElement as HTMLElement;

      expect(rightContainer).toBeInTheDocument();
      expect(rightContainer).toHaveClass('navbar_right');

      expect(navbar).toContainElement(rightContainer);
    });

    it('Then the left div is still rendered', () => {
      render(<RightItems />);
      const navbar = screen.getByRole('navigation');

      const divs = navbar.querySelectorAll('div');
      expect(divs).toHaveLength(2);
    });
  });

  describe('When the Navbar is created with left and right items', () => {
    it('Then simple items appear in separate divs', () => {
      render(<LeftAndRightItems />);
      const navbar = screen.getByRole('navigation');
      const leftContainer = screen.getByText('Left Items');
      const rightContainer = screen.getByText('Right Items');

      expect(leftContainer).toBeInTheDocument();
      expect(leftContainer).toHaveClass('navbar_left');
      expect(rightContainer).toBeInTheDocument();
      expect(rightContainer).toHaveClass('navbar_right');

      expect(navbar).toContainElement(leftContainer);
      expect(navbar).toContainElement(rightContainer);
      expect(leftContainer).not.toBe(rightContainer);
    });

    it('Then complex items appear in the left and right divs', () => {
      render(<LeftAndRightItemsComplex />);
      const navbar = screen.getByRole('navigation');
      const leftContainer = screen.getByText('Left Item 1').parentElement
        ?.parentElement as HTMLElement;
      const rightContainer = screen.getByText('Right Item 1').parentElement
        ?.parentElement as HTMLElement;

      expect(leftContainer).toBeInTheDocument();
      expect(leftContainer).toHaveClass('navbar_left');
      expect(rightContainer).toBeInTheDocument();
      expect(rightContainer).toHaveClass('navbar_right');

      expect(navbar).toContainElement(leftContainer);
      expect(navbar).toContainElement(rightContainer);
      expect(leftContainer).not.toBe(rightContainer);
    });
  });

  describe('When the Navbar is provided a custom background color', () => {
    it('Then the background color style is applied', () => {
      render(<BackgroundColor />);
      const navbar = screen.getByRole('navigation');

      expect(navbar).toHaveStyle({ 'background-color': 'rgb(0, 0, 255)' });
    });
  });

  describe('When the Navbar is provided a custom text color', () => {
    it('Then the color style is applied', () => {
      render(<TextColor />);
      const navbar = screen.getByRole('navigation');

      expect(navbar).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    });
  });

  describe('When the Navbar is provided a shadow prop', () => {
    it('Then a true prop applies a shadow class', () => {
      render(<ShadowYes />);
      const navbar = screen.getByRole('navigation');

      expect(navbar).toHaveClass('navbar-shadow');
    });

    it('Then a false prop does not apply a shadow class', () => {
      render(<ShadowNo />);
      const navbar = screen.getByRole('navigation');

      expect(navbar).not.toHaveClass('navbar-shadow');
    });
  });

  describe('When the Navbar is provided all props', () => {
    it('Then all are applied', () => {
      render(<FullNavbar />);
      const navbar = screen.getByRole('navigation');

      expect(navbar).toHaveStyle({ 'background-color': 'rgb(173, 216, 230)' });
      expect(navbar).toHaveStyle({ color: 'rgb(51, 51, 51)' });
      expect(navbar).toHaveClass('navbar-shadow');

      const leftContainer = screen.getByText('Left Items');
      const rightContainer = screen.getByText('Right Items');

      expect(navbar).toContainElement(leftContainer);
      expect(navbar).toContainElement(rightContainer);
    });
  });
});
