import React, { useEffect, useState } from 'react';
import { Modal } from '@material-ui/core';
import { debounce } from 'lodash';
import axios from 'axios';
import useStyles from './ModalMercadoriaForm.styles';
// import TableMercadoriaForm from './TableMercadoriaForm';
import TableTeste from './TableTeste';

interface ModalMercadoriaFormProps {
  showModal: boolean;
  handleModal: () => void;
  handleChangeValue: (value: any) => any;
}

const ModalMercadoriaForm: React.FC<ModalMercadoriaFormProps> = ({
  showModal,
  handleModal,
  handleChangeValue,
}) => {
  const [codNcca, setCodNcca] = useState('');
  const [books, setBooks] = useState<any | null>([]);
  const [data, setData] = useState<any | null>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const styles = useStyles();

  async function fetchCodNcca(cod: string, pageItem: number) {
    setIsLoading(true);
    axios({
      method: 'GET',
      url: 'http://172.20.10.177:5502/naladi/ncca',
      params: { cod, page: pageItem },
      // eslint-disable-next-line no-return-assign
    }).then((res) => {
      setBooks((prevBooks: any) => [...prevBooks, ...res.data.data]);
    }).finally(() => setIsLoading(false));
  }

  async function search(criteria: string, pageNum: number) {
    // if (!cod && page > 1) setPage(1);
    setIsLoading(true);
    setBooks([]);
    axios({
      method: 'GET',
      url: 'http://172.20.10.177:5502/naladi/ncca',
      params: { cod: criteria, page: pageNum },
      // eslint-disable-next-line no-return-assign
    }).then((res) => {
      setBooks(res.data.data);
    }).finally(() => setIsLoading(false));
  }

  const handleChangePage = async (pageNum: any) => {
    if (pageNum >= page) {
      await fetchCodNcca(codNcca, page + 1);
      setPage(pageNum + 1);
    }
  };

  const debouncedSearch = debounce(async (criteria) => {
    if (criteria) {
      await search(criteria, 1);
      setCodNcca(criteria);
      setPage(1);
    } else {
      setCodNcca('');
      setBooks(data);
      setPage(1);
    }
  }, 1000);

  const handleSearchChange = (value: string) => {
    debouncedSearch(value);
  };

  const handleSearchOpen = () => {
    // if (page > 1) setPage(1);
  };

  const handleSearchclose = () => {
    setCodNcca('');
    setBooks(data);
    setPage(1);
  };

  useEffect(() => {
    fetchCodNcca('', 1);
  }, []);

  useEffect(() => {
    if (data.length === 0) setData(books);
  }, [books]);

  const handleCloseModal = async () => {
    if (page === 1) {
      await search('', 1);
    } else {
      setBooks([]);
      setCodNcca('');
      setPage(1);
    }
    handleModal();
  };

  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <div className={styles.modalContainer}>
        {console.log(page)}
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
              <TableTeste
                onChange={handleChangeValue}
                onChangePage={handleChangePage}
                onSearchChange={handleSearchChange}
                books={books}
                isLoading={isLoading}
                onSearchOpen={handleSearchOpen}
                onSearchClose={handleSearchclose}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMercadoriaForm;
