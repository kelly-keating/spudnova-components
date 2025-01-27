import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import Table from './Table.tsx';

describe('Table component', () => {
  it('renders with correct data', () => {
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
    const caption = screen.getByText('Test Table');
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    const row1Data1 = screen.getByText('Row 1 Data 1');
    const row1Data2 = screen.getByText('Row 1 Data 2');
    const row2Data1 = screen.getByText('Row 2 Data 1');
    const row2Data2 = screen.getByText('Row 2 Data 2');

    expect(table).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
    expect(row1Data1).toBeInTheDocument();
    expect(row1Data2).toBeInTheDocument();
    expect(row2Data1).toBeInTheDocument();
    expect(row2Data2).toBeInTheDocument();
  });

  it('renders with no data', () => {
    render(<Table label="Test Table" headers={[]} data={[]} />);

    const emptyTable = screen.getByText('No data');

    expect(emptyTable).toBeInTheDocument();
  });

  it('throws an error with different number of headers and rows', () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);

    expect(() =>
      render(
        <Table
          label="Test Table"
          headers={['Header 1', 'Header 2']}
          data={[['Row 1 Data 1', 'Row 1 Data 2'], ['Row 2 Data 1']]}
        />
      )
    ).toThrowError('Data does not match number of headers provided');
  });

  it('renders with vertical direction', () => {
    render(
      <Table
        label="Test Table"
        headers={['Header 1', 'Header 2']}
        data={[
          ['Row 1 Data 1', 'Row 1 Data 2'],
          ['Row 2 Data 1', 'Row 2 Data 2'],
        ]}
        direction="vertical"
      />
    );

    const table = screen.getByRole('table');
    const caption = screen.getByText('Test Table');
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    const row1Data1 = screen.getByText('Row 1 Data 1');
    const row1Data2 = screen.getByText('Row 1 Data 2');
    const row2Data1 = screen.getByText('Row 2 Data 1');
    const row2Data2 = screen.getByText('Row 2 Data 2');

    expect(table).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
    expect(row1Data1).toBeInTheDocument();
    expect(row1Data2).toBeInTheDocument();
    expect(row2Data1).toBeInTheDocument();
    expect(row2Data2).toBeInTheDocument();
  });

  it('renders with horizontal direction', () => {
    render(
      <Table
        label="Test Table"
        headers={['Header 1', 'Header 2']}
        data={[
          ['Row 1 Data 1', 'Row 1 Data 2'],
          ['Row 2 Data 1', 'Row 2 Data 2'],
        ]}
        direction="horizontal"
      />
    );

    const table = screen.getByRole('table');
    const caption = screen.getByText('Test Table');
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    const row1Data1 = screen.getByText('Row 1 Data 1');
    const row1Data2 = screen.getByText('Row 1 Data 2');
    const row2Data1 = screen.getByText('Row 2 Data 1');
    const row2Data2 = screen.getByText('Row 2 Data 2');

    expect(table).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
    expect(row1Data1).toBeInTheDocument();
    expect(row1Data2).toBeInTheDocument();
    expect(row2Data1).toBeInTheDocument();
    expect(row2Data2).toBeInTheDocument();
  });

  it('renders with hidden label', () => {
    render(
      <Table
        label="Test Table - Hidden"
        headers={['Header 1', 'Header 2']}
        data={[
          ['Row 1 Data 1', 'Row 1 Data 2'],
          ['Row 2 Data 1', 'Row 2 Data 2'],
        ]}
        hideLabel
      />
    );

    const table = screen.getByRole('table');
    const caption = screen.getByText('Test Table - Hidden');

    expect(table).toBeInTheDocument();
    expect(caption).toHaveClass('visually-hidden');
    expect(caption).toBeVisible();
  });

  it('renders with visible label', () => {
    render(
      <Table
        label="Test Table - Visible"
        headers={['Header 1', 'Header 2']}
        data={[
          ['Row 1 Data 1', 'Row 1 Data 2'],
          ['Row 2 Data 1', 'Row 2 Data 2'],
        ]}
        hideLabel={false}
      />
    );

    const table = screen.getByRole('table');
    const caption = screen.getByText('Test Table - Visible');

    expect(table).toBeInTheDocument();
    expect(caption).not.toHaveClass('visually-hidden');
    expect(caption).toBeVisible();
  });
});
