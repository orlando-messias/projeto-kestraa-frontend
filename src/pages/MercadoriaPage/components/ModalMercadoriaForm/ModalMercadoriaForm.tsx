import React from 'react';
import { Modal } from '@material-ui/core';
import useStyles from './ModalMercadoriaForm.styles';
import TableMercadoriaForm from './TableMercadoriaForm';

interface ModalMercadoriaFormProps {
  showModal: boolean;
  handleModal: () => void;
  handleChangeValue: (value: any) => any;
}

const ModalMercadoriaForm: React.FC<ModalMercadoriaFormProps> = ({
  showModal,
  handleModal,
  handleChangeValue
}) => {
  const styles = useStyles();

  return (
    <Modal open={showModal} onClose={handleModal}>
      <div className={styles.modalContainer}>
        <div className={styles.ModalContent}>
          <div className={styles.modalTitle}>
            <h3>Código Naladi NCCA</h3>
            <button
              type="button"
              onClick={handleModal}
              className={styles.buttonClose}
            >
              X
            </button>
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
              <TableMercadoriaForm onChange={handleChangeValue} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMercadoriaForm;
