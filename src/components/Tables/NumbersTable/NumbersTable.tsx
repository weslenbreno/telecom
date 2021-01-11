import React from 'react';
import DataTable from 'react-data-table-component';
import columns from './columns';
import Loading from 'components/Loading/Loading';
import { customStyles } from './styles';

type Props = {
  data?: any[];
  totalRows?: number;
  handleChangePage?: (page: any) => void;
  progressPending?: boolean;
};

const NumbersTable: React.FC<Props> = ({
  data,
  totalRows,
  handleChangePage,
  ...props
}) => {
  return (
    <div
      style={{
        padding: 10,
        boxShadow: '0px 0px 7px rgba(0,0,0,0.2)',
        borderRadius: 35,
        paddingTop: 15,
        background: '#fff',
      }}
    >
      <DataTable
        noHeader
        columns={columns}
        data={data || []}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangePage={handleChangePage}
        customStyles={customStyles}
        progressComponent={<Loading />}
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
        {...props}
      />
    </div>
  );
};

export default NumbersTable;
