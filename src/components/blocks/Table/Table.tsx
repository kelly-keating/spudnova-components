import { PropsVoid } from '../../../models.ts';

import VisuallyHidden from '../../elements/VisuallyHidden/VisuallyHidden.tsx';

export interface TableProps extends PropsVoid {
  label: string;
  headers: string[];
  data: React.ReactNode[][];
  hideLabel?: boolean;
  direction?: 'horizontal' | 'vertical';
}

function Table({
  className = '',
  label,
  headers,
  data,
  hideLabel = false,
  direction = 'horizontal',
}: TableProps) {
  if (data.length === 0) {
    return <div className="SN-table__empty">No data</div>;
  }
  data.forEach((row) => {
    if (row.length !== headers.length) {
      throw new Error('Data does not match number of headers provided');
    }
  });

  if (direction === 'vertical') {
    return (
      <table className={`${className} SN-table`}>
        <caption className="SN-table_caption">
          {hideLabel ? <VisuallyHidden>{label}</VisuallyHidden> : label}
        </caption>
        <tbody>
          {headers.map((header, index) => (
            <tr key={header} className="SN-table_row">
              <th key={header} className="SN-table_header" scope="row">
                {header}
              </th>
              {data.map((row) => (
                <td key={`${row[0]}-${header}`} className="SN-table_data">
                  {row[index]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table className={`${className} SN-table`}>
      <caption className="SN-table_caption">
        {hideLabel ? <VisuallyHidden>{label}</VisuallyHidden> : label}
      </caption>
      <thead>
        <tr className="SN-table_row__head">
          {headers.map((header) => (
            <th key={header} className="SN-table_header" scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={String(row[0]) as string} className="SN-table_row">
            {row.map((cell, index) => (
              <td
                key={`${String(row[0])}-${headers[index]}`}
                className="SN-table_data"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
