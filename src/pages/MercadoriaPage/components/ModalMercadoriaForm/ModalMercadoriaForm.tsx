import React from 'react';
import { Button, Modal } from '@material-ui/core';
import useStyles from './ModalMercadoriaForm.styles';

interface ModalMercadoriaFormProps {
  showModal: boolean;
  handleModal: () => void;
}

const ModalMercadoriaForm: React.FC<ModalMercadoriaFormProps> = ({ showModal, handleModal }) => {
  const styles = useStyles();

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
              X
            </Button>
          </div>
        </div>
        <p>Content HERE</p>
      </div>
    </Modal>
  );
};

export default ModalMercadoriaForm;
