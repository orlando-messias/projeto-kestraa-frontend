import React, { useEffect, useState } from 'react';
import { Modal } from '@material-ui/core';
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
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const styles = useStyles();

  const handleChangePage = (pageNum: any) => {
    if (pageNum >= page) setPage(pageNum + 1);
    console.log(pageNum);
  };

  const handleSearchChange = (search: any) => {
    // setCod(search);
    setCod(search);
  };

  useEffect(() => {
    setIsLoading(true);
    // if (cod.length > 0) {
    //   setBooks([]);
    //   setPage(1);
    // }
    let cancel: any;
    axios({
      method: 'GET',
      url: 'http://172.20.10.177:5502/naladi/ncca',
      params: { cod, page },
      // eslint-disable-next-line no-return-assign
      cancelToken: new axios.CancelToken((c) => cancel = c)
    }).then((res) => {
      if (cod.length > 0 && page === 1) setBooks([]);
      setBooks((prevBooks: any) => [...prevBooks, ...res.data.data]);
    }).catch((e) => {
      // eslint-disable-next-line no-useless-return
      if (axios.isCancel(e)) return;
    }).finally(() => setIsLoading(false));

    return () => cancel();
  }, [page, cod]);

  const handleCloseModal = () => {
    if (page > 1 || cod.length > 0) {
      setBooks([]);
      setPage(1);
      setCod('');
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
              />
              {console.log('books 1', books)}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMercadoriaForm;
