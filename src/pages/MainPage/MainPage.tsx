// import AutocompleteInput from 'components/AutocompleteInput/AutocompleteInput';
import React, { useEffect } from 'react';
import axios from 'axios';
import Menu from '../../components/Menu/Menu';
import { Container } from './MainPage.styles';

const MainPage = () => {
  console.log('');

  useEffect(() => {
    axios.post('http://172.20.10.177:5502/load', { loadId: '9a88cce5-cdb0-48f7-89d9-f7c157acd3b2' })
      .then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <Menu />
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Main Page</h2>
        </div>
        <div style={{ padding: '10px', marginTop: '20px' }}>
          {/* <AutocompleteInput /> */}
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
