import React from 'react';
import { Button, Modal } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
// styles
import useStyles from './ModalMercadoriaForm.styles';
// data
import data from '../data.json';

interface Item {
  codigo: string;
  descricao: string;
}

interface ModalMercadoriaFormProps {
  showModal: boolean;
  handleModal: () => void;
  handleChangeValue: (algo: any) => any;
}

const renderItem = (i: any): Item => ({
  codigo: i.codigo,
  descricao: i.descricao
});

const ModalMercadoriaForm: React.FC<ModalMercadoriaFormProps> = ({
  showModal,
  handleModal,
  handleChangeValue
}) => {
  const styles = useStyles();

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
    rowsPerPage: 5,
    rowsPerPageOptions: [5],
    onRowClick: (rowData: any) => {
      handleChangeValue(`${rowData[0]} - ${rowData[1]}`);
    },
    // setCellProps: () => ({ style: { minWidth: '100px', maxWidth: '600px' } }),
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
    <Modal open={showModal} onClose={handleModal}>
      <div className={styles.modalContainer}>
        <div className={styles.ModalContent}>
          <div className={styles.modalTitle}>
            <h3>Código Naladi NCCA</h3>
            <Button
              onClick={handleModal}
              className={styles.buttonClose}
            >
              x
            </Button>
          </div>
          <div style={{
            width: '100%', display: 'flex', justifyContent: 'center'
          }}
          >
            <div style={{
              marginTop: '30px', width: '90%', height: '500px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'
            }}
            >
              <h4 style={{ marginBottom: '15px' }}>Selecione um código</h4>
              <MUIDataTable
                title=""
                data={data.map((item) => renderItem(item))}
                columns={columns}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMercadoriaForm;
