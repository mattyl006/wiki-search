import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../utils/theme';
import Article from '../components/Article';
import Media from "react-media";
import mobileRender from './mobileRender';
import desktopRender from './desktopRender';
import {queryAction, queryActionDesktop, setQuery} from './queryMethods';

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
    queryInput: '',
    query: '',
    results: [],
    api: 'http://localhost:8983/solr/games/'
  }

  queryAction = (e) => {
    queryAction(this, e);
  }

  queryActionDesktop = (e) => {
    queryActionDesktop(this, e);
  }

  setQuery = (e) => {
    setQuery(this, e);
  }
  
  showMoreResults = () => {
    //
  }

  resultsRender(prefix) {
    return (
      this.state.results.slice(0, 10).map((result, i) => 
        <Article key={`${prefix} ${i}`} name={result.name[0]} tags={result.popular_tags[0]}
                 describe={result.game_description[0]} query={this.state.query} />)
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
