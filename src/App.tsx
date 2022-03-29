import { createTheme, MuiThemeProvider } from '@material-ui/core';
import AppRoutes from 'Routes';
import GlobalStyles from './styles/global';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1769aa',
    },
    secondary: {
      main: '#b2102f',
    },
  },
});

const App = () => (
  <div>
    <GlobalStyles />
    <MuiThemeProvider theme={theme}>
      <AppRoutes />
    </MuiThemeProvider>
  </div>
);

export default App;
