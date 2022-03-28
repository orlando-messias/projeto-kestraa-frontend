import MainPage from 'pages/MainPage/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
