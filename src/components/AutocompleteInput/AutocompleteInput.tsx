import { Close, Search } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import ModalMercadoriaForm from 'pages/MercadoriaPage/components/ModalMercadoriaForm/ModalMercadoriaForm';
import { Button } from '@material-ui/core';
import { DataItem, DataResult, SearchInput } from './Autocomplete.styles';
import data from '../../pages/MercadoriaPage/components/data.json';

interface Item {
  id: string;
  cod: string
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

    const newFilter = data.filter((value) => value.cod.toLowerCase()
      .includes(v.toLocaleLowerCase()));
    setInputSearch(event.target.value);

    setFilterSearch(newFilter);
  };

  const handleClickAutocomplete = (value: Item) => {
    setInputSearch(value.cod);
    setFilterSearch([]);
  };

  const clearText = () => {
    setInputSearch('');
    setFilterSearch([]);
  };

  return (
    <>
      <SearchInput>
        <Search className="icon" />
        <input
          type="text"
          placeholder="Pesquisar..."
          value={inputSearch}
          onChange={handleFilter}
        />
        {inputSearch !== ''
          ? <Close style={{ color: '#c2c2c2', fontSize: '18px', fontWeight: 'bold' }} onClick={clearText} />
          : ''}
      </SearchInput>

      {filterSearch && (
        <DataResult>
          {filterSearch.map((value) => (
            <DataItem key={value.id} onClick={() => handleClickAutocomplete(value)}>
              <Search style={{ color: '#c2c2c2' }} />
              <p>{value.cod}</p>
            </DataItem>
          ))}
        </DataResult>
      )}

      <Button onClick={handleModal}>Modal</Button>

      <ModalMercadoriaForm showModal={showModal} handleModal={handleModal} />
    </>
  );
};

export default AutocompleteInput;
