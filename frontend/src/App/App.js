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
    api: 'http://localhost:8983/solr/games/',
    pageNr: 1,
    alphabetSort: false
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

  setAlphabetSort = (e) => {
    this.setState({
      alphabetSort: e.target.checked
    });
  }

  resultsRender(prefix) {
    let results = [];
    let n = (this.state.pageNr - 1) * 10;
    let resultsAlphabetSorted = this.state.results.slice();
    resultsAlphabetSorted.sort((a, b) => a.name[0] > b.name[0] ? 1 : -1);
    if(this.state.alphabetSort)
      results = resultsAlphabetSorted;
    else results = this.state.results;
    return (
      results.slice(n, (n + 10)).map((result, i) =>
        <Article key={`${prefix} ${i}`} name={result.name[0]} tags={result.popular_tags[0]}
                 describe={result.game_description[0]} 
                 date={result.release_date[0]} 
                 query={this.state.query} />)
    );
  }

  mobileRender = () => {
    return mobileRender(this);
  }

  desktopRender = () => {
    return desktopRender(this);
  }

  increasePageNr = () => {
    let resultsLen = this.state.results.length;
    let pageCount = 0;
    if(resultsLen % 10 == 0)
        pageCount = Math.floor(resultsLen / 10);
    else pageCount = Math.floor(resultsLen / 10) + 1;

    if(this.state.pageNr < pageCount) {
        let newPageNr = this.state.pageNr + 1;
        this.setState({
            pageNr: newPageNr
        });
    }
  }

  decreasePageNr = () => {
      if(this.state.pageNr > 1) {
          let newPageNr = this.state.pageNr - 1;
          this.setState({
              pageNr: newPageNr
          });
      }
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
