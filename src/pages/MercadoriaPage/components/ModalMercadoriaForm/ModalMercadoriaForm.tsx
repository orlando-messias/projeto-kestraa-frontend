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
  const [cod, setCod] = useState('');
  const [books, setBooks] = useState<any | null>([]);
  const [data, setData] = useState<any | null>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const styles = useStyles();

  const handleChangePage = (pageNum: any) => {
    if (pageNum >= page) setPage(pageNum + 1);
    console.log(pageNum);
  };

  async function search(criteria: string) {
    // if (!cod && page > 1) setPage(1);
    setBooks([]);
    axios({
      method: 'GET',
      url: 'http://172.20.10.177:5502/naladi/ncca',
      params: { cod: criteria, page },
      // eslint-disable-next-line no-return-assign
    }).then((res) => {
      setBooks(res.data.data);
    });
  }

  const debouncedSearch = debounce(async (criteria) => {
    if (criteria) {
      await search(criteria);
      setCod(criteria);
    } else {
      setCod('');
      setBooks(data);
    }
  }, 1000);

  const handleSearchChange = (value: string) => {
    // setCod(search);
    // setCod(search);
    debouncedSearch(value);
  };

  const handleSearchOpen = () => {
    if (page > 1) setPage(1);
  };

  const handleSearchclose = () => {
    setBooks([]);
    setCod('');
  };

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: 'GET',
      url: 'http://172.20.10.177:5502/naladi/ncca',
      params: { cod, page },
      // eslint-disable-next-line no-return-assign
    }).then((res) => {
      setBooks((prevBooks: any) => [...prevBooks, ...res.data.data]);
    }).finally(() => setIsLoading(false));
  }, [page]);

  useEffect(() => {
    if (data.length === 0) setData(books);
  }, [books]);

  const handleCloseModal = async () => {
    if (page === 1) {
      await search('');
    } else {
      setBooks([]);
      setCod('');
      setPage(1);
    }
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
