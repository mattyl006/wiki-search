import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import Logo from './components/Logo';
import Icon from './components/Icon';
import document from './assets/document.svg'
import Search from './components/Search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Logo setBackgroundColor={theme.colors.darkBlue} 
            setWidth={'100%'} setHeight={'200px'} setFontSize={'64px'} />
       <Icon src={document} alt={'Document icon.'} 
             setWidth={'90px'} setHeight={'90px'} animation={true} />
       <Search setWidth={'310px'} setHeight={'52px'} />
    </ThemeProvider>
  );
}

export default App;
