import React, { useEffect, useState } from 'react';
import { Modal } from '@material-ui/core';
import { debounce } from 'lodash';
import axios from 'axios';
import useStyles from './ModalMercadoriaForm.styles';
import TableMercadoriaForm from './TableMercadoriaForm';

interface ModalMercadoriaFormProps {
  showModal: boolean;
  handleModal: () => void;
  handleChangeValue: (value: string) => void;
}

interface Item {
  cod: string;
  description: string;
}

const ModalMercadoriaForm: React.FC<ModalMercadoriaFormProps> = ({
  showModal,
  handleModal,
  handleChangeValue,
}) => {
  const [codNcca, setCodNcca] = useState('');
  const [nccaItems, setNccaItems] = useState<Item[] | null>([]);
  const [copyNccaItems, copySetNccaItems] = useState<Item[] | null>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const styles = useStyles();

  useEffect(() => {
    if (!copyNccaItems?.length) copySetNccaItems(nccaItems);
  }, [nccaItems]);

  async function fetchCodNcca(cod: string, pageNum: number) {
    setIsLoading(true);
    axios({
      method: 'GET',
      url: 'http://172.20.10.177:5502/naladi/ncca',
      params: { cod, page: pageNum },
    }).then((res) => {
      if (pageNum === 1) {
        setNccaItems(res.data.data);
      } else {
        setNccaItems((prevNccaItems: any) => [...prevNccaItems, ...res.data.data]);
      }
    })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchCodNcca('', 1);
  }, []);

  const handleChangePage = async (pageNum: number) => {
    if (pageNum >= page) {
      await fetchCodNcca(codNcca, page + 1);
      setPage(pageNum + 1);
    }
  };

  const debouncedSearch = debounce(async (criteria) => {
    if (criteria) {
      await fetchCodNcca(criteria, 1);
      setCodNcca(criteria);
    } else {
      setCodNcca('');
      setNccaItems(copyNccaItems);
    }
    setPage(1);
  }, 1000);

  const handleSearchChange = (value: string) => {
    debouncedSearch(value);
  };

  const handleCloseModal = async () => {
    handleModal();
  };

  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <div className={styles.modalContainer}>
        <div className={styles.ModalContent}>
          <div className={styles.modalTitle}>
            <h4>Código Naladi NCCA</h4>
            <button
              type="button"
              onClick={handleCloseModal}
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
              marginTop: '14px', width: '90%', height: '500px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'
            }}
            >
              <TableMercadoriaForm
                onChange={handleChangeValue}
                onChangePage={handleChangePage}
                onSearchChange={handleSearchChange}
                data={nccaItems}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMercadoriaForm;
