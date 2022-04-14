import { Close, Search } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import ModalMercadoriaForm from 'pages/MercadoriaPage/components/ModalMercadoriaForm/ModalMercadoriaForm';
import { DataItem, DataResult, SearchInput } from './Autocomplete.styles';
import data from '../../pages/MercadoriaPage/components/data.json';

interface Item {
  codigo: string;
  descricao: string;
}

const AutocompleteInput = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [filterSearch, setFilterSearch] = useState<Item[] | null>([]);
  const [showModal, setShowModal] = useState(false);
  const [teste, setTeste] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (inputSearch === '') {
      setFilterSearch([]);
    }
  }, [inputSearch]);

  useEffect(() => {
    if (filterSearch?.length) {
      setTeste(true);
    } else {
      setTeste(false);
    }
  }, [filterSearch]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;

    const newFilter = data.filter((value) => value.codigo.toLowerCase()
      .includes(v.toLowerCase())
      || value.descricao.toLowerCase().includes(v.toLowerCase()));
    setInputSearch(event.target.value);

    setFilterSearch(newFilter);
  };

  const handleClickAutocomplete = (value: Item) => {
    setInputSearch(`${value.codigo} - ${value.descricao}`);
    setFilterSearch([]);
  };

  const clearText = () => {
    setInputSearch('');
    setFilterSearch([]);
  };

  const handleChangeValue = (value: string) => {
    setInputSearch(value);
    setFilterSearch([]);
    handleModal();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchInput hasFocus={focus}>
        {/* <Search className="icon" /> */}
        <input
          type="text"
          placeholder="Codigo Naladi NCCA"
          value={inputSearch}
          onChange={handleFilter}
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

      {filterSearch && (
        <DataResult teste={teste}>
          {filterSearch.map((value) => (
            <DataItem key={value.codigo} onClick={() => handleClickAutocomplete(value)}>
              <Search style={{ color: '#c2c2c2' }} />
              <p>{`${value.codigo} - ${value.descricao}`}</p>
            </DataItem>
          ))}
        </DataResult>
      )}

      <br />

      <ModalMercadoriaForm
        showModal={showModal}
        handleModal={handleModal}
        handleChangeValue={handleChangeValue}
      />

    </div>
  );
};

export default AutocompleteInput;
