import Menu from '../../components/Menu/Menu';
import { Container } from './MainPage.styles';

const MainPage = () => (
  <Container>
    <Menu />
    <div style={{ padding: '20px' }}>
      <h2>Main Page</h2>
    </div>
  </Container>
);

export default MainPage;
