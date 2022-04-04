import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import Logo from './components/Logo';
import Icon from './components/Icon';
import document from './assets/document.svg'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Logo setBackgroundColor={theme.colors.darkBlue} 
            setWidth={'100%'} setHeight={'200px'} setFontSize={'64px'} />
       <Icon src={document} alt={'Document icon.'} 
             setWidth={'90px'} setHeight={'90px'} animation={true} />
    </ThemeProvider>
  );
}

export default App;
