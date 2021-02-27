import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Page1 />
      <Page2 />
      <Banner1 />
      <Banner2 />
      <Page3 />
    </ThemeProvider>
  );
}

export default App;
