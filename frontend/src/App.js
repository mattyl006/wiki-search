import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import Logo from './components/Logo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Logo setBackgroundColor={theme.colors.darkBlue} 
            setWidth={'100%'} setHeight={'200px'} setFontSize={'64px'} />
    </ThemeProvider>
  );
}

export default App;
