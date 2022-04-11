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

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (inputSearch === '') setFilterSearch([]);
  }, [inputSearch]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;

    const newFilter = data.filter((value) => value.codigo.toLowerCase()
      .includes(v.toLocaleLowerCase())
      || value.descricao.toLocaleLowerCase().includes(v.toLocaleLowerCase()));
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
    <>
      <SearchInput>
        {/* <Search className="icon" /> */}
        <input
          type="text"
          placeholder="Pesquisar..."
          value={inputSearch}
          onChange={handleFilter}
        />
        <div style={{ display: 'flex' }}>
          {inputSearch !== ''
            ? (
              <Close
                style={{
                  color: '#c2c2c2',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
                onClick={clearText}
              />
            )
            : ''}
        </div>
        <Search style={{ fontSize: '22px', cursor: 'pointer' }} onClick={handleModal} />
      </SearchInput>

      {filterSearch && (
        <DataResult>
          {filterSearch.map((value) => (
            <DataItem onClick={() => handleClickAutocomplete(value)}>
              <Search style={{ color: '#c2c2c2' }} />
              <p>{value.codigo}</p>
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

      {console.log(filterSearch)}
    </>
  );
};

export default AutocompleteInput;
