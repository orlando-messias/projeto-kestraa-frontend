import { Close, Search } from '@mui/icons-material';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { CircularProgress } from '@mui/material';
import ModalMercadoriaForm from 'pages/MercadoriaPage/components/ModalMercadoriaForm/ModalMercadoriaForm';
import { DataItem, DataResult, SearchInput } from './Autocomplete.styles';
import useSearch from '../../hooks/useSearch';

interface Item {
  cod: string;
  description: string;
}

interface AutocompleteInput4Props {
  inputValue: string | null | undefined;
  onChangeValue: (v: any) => any;
}

const AutocompleteInput3: React.FC<AutocompleteInput4Props> = ({ inputValue, onChangeValue }) => {
  const [inputSearch, setInputSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [teste, setTeste] = useState(false);
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState('xxxx__');
  const [pageNumber, setPageNumber] = useState(1);
  const [copyNccaItems, setCopyNccaItems] = useState<Item[] | null>([]);
  const [api, setApi] = useState('');

  useEffect(() => {
    setApi('ncm');
  }, []);

  useEffect(() => {
    if (inputValue) setInputSearch(inputValue);
  }, [inputValue]);

  useEffect(() => {
    onChangeValue(inputSearch);
  }, [inputSearch]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setInputSearch(e.target.value);
    setPageNumber(1);
  }

  const {
    data,
    loading,
    error,
    hasMore
  } = useSearch(query, pageNumber, api);

  const observer = useRef<IntersectionObserver>();

  const lastBookElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const handleModal = () => {
    setQuery('xxx');
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (inputSearch === '') {
      setQuery('xxx');
    }
  }, [inputSearch]);

  useEffect(() => {
    if (data?.length) {
      setTeste(true);
    } else {
      setTeste(false);
    }
  }, [data]);

  const handleClickAutocomplete = (value: any) => {
    setInputSearch(value);
    setQuery('xxx');
  };

  const clearText = () => {
    setInputSearch('');
    // setFilterSearch([]);
  };

  const handleChangeValue = (value: string) => {
    setInputSearch(value);
    // setFilterSearch([]);
    handleModal();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchInput hasFocus={focus}>
        {/* <Search className="icon" /> */}
        <input
          type="text"
          placeholder="Codigo NCM"
          value={inputSearch}
          onChange={handleSearch}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <div style={{ display: 'flex' }}>
          {inputSearch !== ''
            ? (
              <Close
                style={{
                  color: '#c2c2c2',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={clearText}
              />
            )
            : ''}
        </div>
        <Search style={{ fontSize: '22px', cursor: 'pointer', color: '#2974b0' }} onClick={handleModal} />
      </SearchInput>

      {data.length > 0 && (
        <DataResult teste={teste}>
          {data.map((value: any, index: number) => {
            if (data.length === index + 1) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <DataItem key={index} onClick={() => handleClickAutocomplete(value)}>
                  <Search style={{ color: '#c2c2c2' }} />
                  <p ref={lastBookElementRef}>{`${value}`}</p>
                </DataItem>
              );
            // eslint-disable-next-line no-else-return
            } else {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <DataItem key={index} onClick={() => handleClickAutocomplete(value)}>
                  <Search style={{ color: '#c2c2c2' }} />
                  <p>{`${value}`}</p>
                </DataItem>
              );
            }
          })}
          {loading
            && (
            <p style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
              <CircularProgress size="1rem" />
              &nbsp;&nbsp;loading...
            </p>
            )}
          <p>{error && 'error'}</p>
        </DataResult>
      )}

      <br />

      {showModal && (
        <ModalMercadoriaForm
          api={api}
          showModal={showModal}
          handleModal={handleModal}
          handleChangeValue={handleChangeValue}
          copyNccaItems={copyNccaItems}
          setCopyNccaItems={setCopyNccaItems}
        />
      )}
    </div>
  );
};

export default AutocompleteInput3;
