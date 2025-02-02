import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/react';

import Table from './Table.tsx';
import * as stories from './Table.stories.tsx';

describe('Table - accessibility', () => {
  describe('When rendered in the default state', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <Table label="Test Table" headers={[]} data={[]} />
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('When rendered with simple data', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <Table
          label="Test Table"
          headers={['Header 1', 'Header 2']}
          data={[
            ['Row 1 Data 1', 'Row 1 Data 2'],
            ['Row 2 Data 1', 'Row 2 Data 2'],
          ]}
        />
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});

const defaultClassName = 'SN-table';
describe('Table - custom classNames', () => {
  describe('When a className is provided', () => {
    it('The className is applied to the Table alongside the default class', () => {
      render(
        <Table
          label="Test Table"
          headers={['Header 1', 'Header 2']}
          data={[
            ['Row 1 Data 1', 'Row 1 Data 2'],
            ['Row 2 Data 1', 'Row 2 Data 2'],
          ]}
          className="custom-class"
        />
      );

      const table = screen.getByRole('table');
      expect(table).toHaveClass(defaultClassName);
      expect(table).toHaveClass('custom-class');
    });
  });

  describe('When no className is provided', () => {
    it('Then only the default class is applied', () => {
      render(
        <Table
          label="Test Table"
          headers={['Header 1', 'Header 2']}
          data={[
            ['Row 1 Data 1', 'Row 1 Data 2'],
            ['Row 2 Data 1', 'Row 2 Data 2'],
          ]}
        />
      );

      const table = screen.getByRole('table');
      expect(table).toHaveClass(defaultClassName);
      expect(table).not.toHaveClass('custom-class');
    });
  });

  describe('When no data is provided', () => {
    it('Then it applies the empty table class', () => {
      render(
        <Table
          label="Test Table"
          headers={['Header 1', 'Header 2']}
          data={[]}
        />
      );

      const table = screen.getByText('No data');
      expect(table).toHaveClass(`${defaultClassName}__empty`);
    });
  });
});

const { Default, Simple, Complex, NoLabel, YesLabel, Horizontal, Vertical } =
  composeStories(stories);
describe('Table stories', () => {
  describe('When no data is provided', () => {
    it('Then an empty div is rendered', () => {
      render(<Default />);
      const emptyMsg = screen.getByText('No data');

      expect(emptyMsg).toBeInTheDocument();
      expect(emptyMsg.tagName).toBe('DIV');
    });
  });

  describe('When simple data is provided', () => {
    it('Then the table is rendered with the correct data', () => {
      render(Simple());
      const table = screen.getByRole('table');
      const caption = screen.getByText('Simple Table');
      const header1 = screen.getByText('Name');
      const header2 = screen.getByText('Age');
      const row1Data1 = screen.getByText('John Doe');
      const row1Data2 = screen.getByText('73');
      const row2Data1 = screen.getByText('Jane Doe');
      const row2Data2 = screen.getByText('81');

      expect(table).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
      expect(header1).toBeInTheDocument();
      expect(header2).toBeInTheDocument();
      expect(row1Data1).toBeInTheDocument();
      expect(row1Data2).toBeInTheDocument();
      expect(row2Data1).toBeInTheDocument();
      expect(row2Data2).toBeInTheDocument();
    });
  });

  describe('When complex data is provided', () => {
    it('Then the table is rendered with the correct data', () => {
      render(Complex());
      const table = screen.getByRole('table');
      const caption = screen.getByText('Complex Table');
      const header1 = screen.getByText('Name');
      const header2 = screen.getByText('Age');
      const header3 = screen.getByText('Favourite Code');
      const header4 = screen.getByText('Contact');
      const row1Data1 = screen.getByText('John Doe');
      const row1Data2 = screen.getByText('73');
      const row1Data3 = screen.getByText('const greeting = "Hello World!";');
      const row1Data4 = screen.getByText('Contact John');
      const row2Data1 = screen.getByText('Jane Doe');
      const row2Data2 = screen.getByText('81');
      const row2Data3 = screen.getByText('console.log("Hello World!");');
      const row2Data4 = screen.getByText('Contact Jane');

      expect(table).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
      expect(header1).toBeInTheDocument();
      expect(header2).toBeInTheDocument();
      expect(header3).toBeInTheDocument();
      expect(header4).toBeInTheDocument();
      expect(row1Data1).toBeInTheDocument();
      expect(row1Data2).toBeInTheDocument();
      expect(row1Data3).toBeInTheDocument();
      expect(row1Data4).toBeInTheDocument();
      expect(row2Data1).toBeInTheDocument();
      expect(row2Data2).toBeInTheDocument();
      expect(row2Data3).toBeInTheDocument();
      expect(row2Data4).toBeInTheDocument();
    });
  });

  describe('When label is hidden', () => {
    it('Then the label is rendered with text as a hidden element', () => {
      render(NoLabel());
      const caption = screen.getByText('Hidden Table Label');
      const table = screen.getByRole('table');

      expect(caption).toBeInTheDocument();
      expect(caption).toBeVisible();
      expect(caption).toHaveClass('visually-hidden');
      expect(table).toContainElement(caption);
    });
  });

  describe('When label is visible', () => {
    it('Then the label is rendered with the correct data', () => {
      render(YesLabel());
      const caption = screen.getByText('Visible Table Label');
      const table = screen.getByRole('table');

      expect(caption).toBeInTheDocument();
      expect(caption).toBeVisible();
      expect(caption).not.toHaveClass('visually-hidden');
      expect(table).toContainElement(caption);
    });
  });

  describe('When direction is horizontal', () => {
    it('Then the data is rendered in rows', () => {
      render(Horizontal());
      const table = screen.getByRole('table');
      const caption = screen.getByText('Horizontal Table');
      const header1 = screen.getByText('Name');
      const header2 = screen.getByText('Age');

      const data1Name = screen.getByText('John Doe');
      const data1Age = screen.getByText('73');
      const data2Name = screen.getByText('Jane Doe');
      const data2Age = screen.getByText('81');

      const headerRow = table.querySelector('thead tr') as HTMLElement;
      const row1 = table.querySelector('tbody tr:nth-child(1)') as HTMLElement;
      const row2 = table.querySelector('tbody tr:nth-child(2)') as HTMLElement;

      expect(table).toContainElement(caption);
      expect(table).toContainElement(headerRow);
      expect(table).toContainElement(row1);
      expect(table).toContainElement(row2);

      expect(headerRow).toContainElement(header1);
      expect(headerRow).toContainElement(header2);

      expect(row1).toContainElement(data1Name);
      expect(row1).toContainElement(data1Age);

      expect(row2).toContainElement(data2Name);
      expect(row2).toContainElement(data2Age);
    });
  });

  describe('When direction is vertical', () => {
    it('Then the data is rendered in columns', () => {
      render(Vertical());
      const table = screen.getByRole('table');
      const caption = screen.getByText('Vertical Table');
      const header1 = screen.getByText('Name');
      const header2 = screen.getByText('Age');

      const data1Name = screen.getByText('John Doe');
      const data1Age = screen.getByText('73');
      const data2Name = screen.getByText('Jane Doe');
      const data2Age = screen.getByText('81');

      const row1 = table.querySelector('tbody tr:nth-child(1)') as HTMLElement;
      const row2 = table.querySelector('tbody tr:nth-child(2)') as HTMLElement;

      expect(table).toContainElement(caption);
      expect(table).toContainElement(row1);
      expect(table).toContainElement(row2);

      expect(row1).toContainElement(header1);
      expect(row1).toContainElement(data1Name);
      expect(row1).toContainElement(data2Name);

      expect(row2).toContainElement(header2);
      expect(row2).toContainElement(data1Age);
      expect(row2).toContainElement(data2Age);
    });
  });
});
