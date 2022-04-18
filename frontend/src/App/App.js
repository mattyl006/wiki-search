import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../utils/theme';
import Article from '../components/Article';
import Media from "react-media";
import mobileRender from './mobileRender';
import desktopRender from './desktopRender';
import {queryAction, queryActionDesktop} from './queryMethods';

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
    },
    desktopView: {
      aligmentY: 'center',
      logoDisplay: 'flex',
      miniLogoDisplay: 'none',
      searchMaxWidth: '90vw'
    },
    documentIconDesktop: {
      animation: false,
      display: 'none'
    },
    query: 'witcher',
    api: 'http://localhost:8983/solr/games/'
  }

  queryAction = (e) => {
    queryAction(this, e);
  }

  queryActionDesktop = (e) => {
    queryActionDesktop(this, e);
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

  mobileRender = () => {
    return mobileRender(this);
  }

  desktopRender = () => {
    return desktopRender(this);
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
