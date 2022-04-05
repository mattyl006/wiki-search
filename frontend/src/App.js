import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import Logo from './components/Logo';
import Icon from './components/Icon';
import document from './assets/document.svg';
import Search from './components/Search';
import Article from './components/Article';
import Button from './components/Button';
import Media from "react-media";
import {FlexColumn, FlexRow, Grid} from './utils/containers';
import {H2, Text_button} from './utils/fonts';
import Category from './components/Category';

class App extends React.Component {
  state = {
    searchLabel: {
      display: 'block',
      opacity: '1'
    },
    documentIcon: {
      animation: false,
      display: 'block'
    },
    results: {
      page1: false,
      page2: false
    }
  }

  queryAction = () => {
    setTimeout(() => {
      this.setState({
        searchLabel: {
          display: 'block',
          opacity: '0'
        },
        documentIcon: {
          animation: true,
          display: 'block'
        }
      });
    }, 300);

    setTimeout(() => {
      this.setState({
        searchLabel: {
          display: 'none',
          opacity: '0'
        },
        documentIcon: {
          animation: false,
          display: 'none'
        },
        results: {
          page1: true,
          page2: false,
        }
      });
    }, 3000);
  }
  
  showMoreResults = () => {
    this.setState({
      results: {
        page1: true,
        page2: true,
      }
    });
  }

  resultsRender(prefix) {
    return (
      [...Array(10)].map((e, i) => <Article key={`${prefix} ${i}`} />)
    );
  }

  mobileRender() {
    return (
      <Grid setWidth={'100%'} setMinHeight={'100vh'} setTemplateRows={'auto 1fr'}>
        <FlexColumn setWidth={'100%'}>
            <Logo setBackgroundColor={theme.colors.darkBlue} 
                  setWidth={'100%'} setHeight={'200px'} setFontSize={'64px'} />
            <Search setMargin={'32px 0 48px 0'} setWidth={'90%'} 
                    setHeight={'52px'} action={this.queryAction} />
        </FlexColumn>
        <FlexRow>
          <FlexColumn>
            <H2 onClick={this.queryAction}
                       setDisplay={this.state.searchLabel.display}
                       setOpacity={this.state.searchLabel.opacity}
                       setMargin={'0 0 48px 0'}>
              Let's search!
            </H2>
            <Icon src={document} alt={'Document icon.'} 
                  setWidth={'90px'} setHeight={'90px'}
                  setDisplay={this.state.documentIcon.display} 
                  animation={this.state.documentIcon.animation} />
            {this.state.results.page1 ? this.resultsRender('page1') : ''}
            {this.state.results.page1 && !this.state.results.page2 
              ? <Button setBorderRadius={'4px'} setMargin={'8px 0 32px 0'} 
                        action={this.showMoreResults} setBackgroundColor={theme.colors.light2}
                        setWidth={'160px'} setHeight={'32px'}>
                <Text_button>
                  See more
                </Text_button>
              </Button> : ''}
            {this.state.results.page2 ? this.resultsRender('page2') : ''}
          </FlexColumn>
        </FlexRow>
      </Grid>
    );
  }

  desktopRender() {
    return (
      <FlexColumn setWidth={'100%'} setMinHeight={'100vh'}>
        <Logo setBackgroundColor={theme.colors.darkBlue} 
              setWidth={'400px'} setHeight={'100px'} setFontSize={'48px'} />
        <Search setMargin={'64px 0 24px 0'} setWidth={'940px'} setMaxWidth={'90%'} 
                setHeight={'64px'} action={this.queryAction} />
        <FlexRow setGap={'32px'}>
          <Category name={'category 1'} />
          <Category name={'category 2'} />
          <Category name={'category 3'} />
          <Category name={'category 4'} />
        </FlexRow>
      </FlexColumn>
    );
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Media query={theme.mobile}>
          {this.mobileRender()}
        </Media>
        <Media query={theme.desktop}>
          {this.desktopRender()}
        </Media>
      </ThemeProvider>
    );
  }
}

export default App;
