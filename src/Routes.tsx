import MainPage from 'pages/MainPage/MainPage';
import MercadoriaPage from 'pages/MercadoriaPage/MercadoriaPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cadastro/mercadoria" element={<MercadoriaPage />} />
      <Route path="/cadastro/mercadoria/:mercadoriaId" element={<MercadoriaPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
