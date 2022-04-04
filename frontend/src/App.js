import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import {H1_mobile} from './utils/fonts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <H1_mobile as='h1'>
        WikiSearch
      </H1_mobile>
    </ThemeProvider>
  );
}

export default App;
