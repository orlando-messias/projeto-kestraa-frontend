import React from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

interface TableTesteProps {
  onChange: (algo: any) => any;
  onChangePage: (algo: any) => any;
  onSearchChange: (algo: any) => any;
  books: any[];
  isLoading: boolean;
  onSearchClose: Function;
  onSearchOpen: Function;
}

interface Item {
  cod: string;
  description: string;
}

const renderItem = (i: any): Item => ({
  cod: i.cod,
  description: i.description,
});

class TableTeste extends React.Component<TableTesteProps, {}> {
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
      books,
      isLoading,
      onSearchClose,
      onSearchOpen,
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
      onChangePage: (currentPage: any) => {
        onChangePage(currentPage);
      },
      onSearchClose: () => onSearchClose(),
      onSearchOpen: () => onSearchOpen(),
    };

    return (
      <div>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable
            title=""
            data={books.map((item) => renderItem(item))}
            columns={columns}
            options={options}
          />
          {isLoading
            // eslint-disable-next-line object-curly-newline
            ? <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '-35px' }}><CircularProgress size="1.5rem" /></div>
            : null}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TableTeste;
