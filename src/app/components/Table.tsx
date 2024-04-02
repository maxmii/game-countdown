import React from 'react'
import DataTable from 'react-data-table-component';

interface Column {
  name: string;
  selector: (game: any) => any;
  sortable: boolean;
}

interface TableProps {
  data: any[];
  columns: Column[];
}

const Table = ({ data, columns }: TableProps) => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        fixedHeader
        pagination
        selectableRows
      />
    </div>
  );
};

export default React.memo(Table);
