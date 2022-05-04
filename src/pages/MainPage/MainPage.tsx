// import AutocompleteInput from 'components/AutocompleteInput/AutocompleteInput';
import Menu from '../../components/Menu/Menu';
import { Container } from './MainPage.styles';

const MainPage = () => {
  console.log('');

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
