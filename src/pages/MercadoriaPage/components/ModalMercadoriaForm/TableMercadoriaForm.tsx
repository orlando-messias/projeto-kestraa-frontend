import React from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import data from '../data.json';

interface TableMercadoriaFormProps {
  onChange: (algo: any) => any;
}

interface Item {
  codigo: string;
  descricao: string;
}

const renderItem = (i: any): Item => ({
  codigo: i.codigo,
  descricao: i.descricao
});

class TableMercadoriaForm extends React.Component<TableMercadoriaFormProps, {}> {
  // eslint-disable-next-line class-methods-use-this
  getMuiTheme = () => createTheme({
    overrides: {
      MuiTableRow: {
        hover: { '&$root': { '&:hover': { cursor: 'pointer' }, } },
      },
      MUIDataTableBodyCell: {
        root: {
          padding: '4px 0 3px 5px'
        }
      },
    }
  });

  render() {
    const { onChange } = this.props;
    const columns = [
      {
        name: 'codigo',
        label: 'CODIGO',
        options: {
          filter: false,
          sort: true,
        }
      },
      {
        name: 'descricao',
        label: 'DESCRIÇÃO',
        options: {
          filter: true,
          sort: false,
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
      rowsPerPage: 10,
      rowsPerPageOptions: [10],
      onRowClick: (rowData: any) => {
        onChange(`${rowData[0]} - ${rowData[1]}`);
      },
      textLabels: {
        pagination: {
          displayRows: ' de '
        },
        body: {
          noMatch: 'nenhum item encontrado'
        }
      },
    };

    return (
      <div>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable
            title=""
            data={data.map((item) => renderItem(item))}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TableMercadoriaForm;
