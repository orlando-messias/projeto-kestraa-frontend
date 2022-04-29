import React from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const LoadingDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: -35px;
`;

interface Item {
  cod: string;
  description: string;
}

interface TableMercadoriaFormProps {
  onChange: (rowData: string) => void;
  onChangePage: (currentPage: number) => void;
  onSearchChange: (data: any) => any;
  data: Item[] | null;
  isLoading: boolean;
}

class TableMercadoriaForm extends React.Component<TableMercadoriaFormProps, {}> {
  // eslint-disable-next-line class-methods-use-this
  getMuiTheme = () => createTheme({
    overrides: {
      MuiTableRow: {
        hover: { '&$root': { '&:hover': { cursor: 'pointer' }, } },
      },
      MUIDataTableBodyCell: {
        root: {
          padding: '3px 0 2px 10px',
          fontSize: '12px'
        }
      },
    }
  });

  render() {
    const {
      onChange,
      onChangePage,
      onSearchChange,
      data,
      isLoading,
    } = this.props;

    const columns = [
      {
        name: 'cod',
        label: 'CÓDIGO',
        options: {
          filter: false,
          sort: true,
        }
      },
      {
        name: 'description',
        label: 'DESCRIÇÃO',
        options: {
          filter: false,
          sort: true,
        }
      }
    ];

    const options = {
      filter: true,
      scroll: false,
      download: false,
      print: false,
      viewColumns: false,
      selectableRowsHideCheckboxes: true,
      rowsPerPage: 15,
      rowsPerPageOptions: [15],
      onRowClick: (rowData: any) => {
        onChange(`${rowData[0]} - ${rowData[1]}`);
      },
      textLabels: {
        pagination: {
          displayRows: ' de '
        },
        body: {
          noMatch: isLoading ? <CircularProgress /> : 'nenhum item encontrado'
        }
      },
      onSearchChange,
      onChangePage: (currentPage: number) => {
        onChangePage(currentPage);
      },
    };

    return (
      <div>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable
            title=""
            data={data || []}
            columns={columns}
            options={options}
          />
          {isLoading
            ? <LoadingDiv><CircularProgress size="1.5rem" /></LoadingDiv>
            : null}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TableMercadoriaForm;
