import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/react';

import Card from './Card.tsx';
import * as stories from './Card.stories.tsx';

describe('Card - accessibility', () => {
  describe('When rendered in the default state', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Card content="Card Content goes here" />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});

const defaultClassName = 'card';
describe('Card - custom classNames', () => {
  describe('When a className is provided', () => {
    it('The className is applied to the Card alongside the default class', () => {
      render(
        <Card content="Card Content goes here" className="custom-class" />
      );

      const card = screen.getByRole('group');
      expect(card).toHaveClass(defaultClassName);
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('When no className is provided', () => {
    it('Then only the default class is applied', () => {
      render(<Card content="Card Content goes here" />);

      const card = screen.getByRole('group');
      expect(card).toHaveClass(defaultClassName);
      expect(card).not.toHaveClass('custom-class');
    });
  });
});

const { Default, Header, Footer, TitleImage, FullCard, ComplexContent } =
  composeStories(stories);
describe('Given the Card component', () => {
  describe('When content is provided', () => {
    it('Then it renders the content', () => {
      render(<Default />);
      const cardBody = screen.getByText('Card Content goes here');

      expect(cardBody).toBeInTheDocument();
    });
  });

  describe('When a header is provided', () => {
    it('Then it renders the header', () => {
      render(<Header />);
      const cardHeader = screen.getByText('Card Header');

      expect(cardHeader).toBeInTheDocument();
    });
  });

  describe('When a footer is provided', () => {
    it('Then it renders the footer', () => {
      render(<Footer />);
      const cardFooter = screen.getByText('Card Footer');

      expect(cardFooter).toBeInTheDocument();
    });
  });

  describe('When a title image is provided', () => {
    it('Then it renders the title image', () => {
      render(<TitleImage />);
      const cardImage = screen.getByAltText('Placeholder Image');

      expect(cardImage).toBeInTheDocument();
      expect(cardImage).toHaveAttribute(
        'src',
        'https://via.placeholder.com/150'
      );
    });
  });

  describe('When all props are provided', () => {
    it('Then it renders all elements', () => {
      render(<FullCard />);
      const cardHeader = screen.getByText('Card Header');
      const cardImage = screen.getByAltText('Placeholder Image');
      const cardBody = screen.getByText('Card Content goes here');
      const cardFooter = screen.getByText('Card Footer');

      expect(cardHeader).toBeInTheDocument();
      expect(cardImage).toBeInTheDocument();
      expect(cardBody).toBeInTheDocument();
      expect(cardFooter).toBeInTheDocument();
    });
  });

  describe('When complex content is provided', () => {
    it('Then it renders all given elements', () => {
      render(<ComplexContent />);
      const cardHeader = screen.getByText('Card Header');
      const cardImage = screen.getByAltText('Placeholder Image');
      const cardBody = screen.getByText('Card Content goes here');
      const cardFooter = screen.getByText('Card Footer');

      expect(cardHeader).toBeInTheDocument();
      expect(cardImage).toBeInTheDocument();
      expect(cardBody).toBeInTheDocument();
      expect(cardFooter).toBeInTheDocument();
    });
  });
});
