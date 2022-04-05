import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import Logo from './components/Logo';
import Icon from './components/Icon';
import document from './assets/document.svg';
import Search from './components/Search';
import Media from "react-media";
import {FlexColumn, FlexRow, Grid} from './utils/containers';
import {H2_mobile} from './utils/fonts';

class App extends React.Component {
  state = {
    searchLabel: {
      display: 'block',
      opacity: '1'
    }
  }

  queryAction = () => {
    this.setState({
      searchLabel: {
        display: 'block',
        opacity: '0'
      }
    });

    setTimeout(() => {
      this.setState({
        searchLabel: {
          display: 'none',
          opacity: '0'
        }
      });
    }, 300);
  }

  mobileRender() {
    return (
      <Grid setWidth={'100%'} setMinHeight={'100vh'} setTemplateRows={'auto 1fr'}>
        <FlexColumn setWidth={'100%'}>
            <Logo setBackgroundColor={theme.colors.darkBlue} 
                  setWidth={'100%'} setHeight={'200px'} setFontSize={'64px'} />
            <Search setMargin={'32px 0 0 0'} setWidth={'90%'} 
                    setHeight={'52px'} action={this.queryAction} />
        </FlexColumn>
        <FlexRow>
          <FlexColumn onClick={this.queryAction}>
            <H2_mobile setDisplay={this.state.searchLabel.display}
                       setOpacity={this.state.searchLabel.opacity}
                       setMargin={'0 0 48px 0'}>
              Let's search!
            </H2_mobile>
            <Icon src={document} alt={'Document icon.'} 
                  setWidth={'90px'} setHeight={'90px'} />
          </FlexColumn>
        </FlexRow>
      </Grid>
    );
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Media query={theme.mobile}>
          {this.mobileRender()}
        </Media>
      </ThemeProvider>
    );
  }
}

export default App;
