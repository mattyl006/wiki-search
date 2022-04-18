const queryAction = (component, e) => {
    e.preventDefault();
    fetch(`${component.state.api}select?indent=true&q.op=OR&q=name%3A
           ${component.state.query}%20popular_tags%3A
           ${component.state.query}%20game_description%3A${component.state.query}&rows=10`)
    .then(response => response.json())
    .then(data => console.log(data));

    e.preventDefault();
    setTimeout(() => {
      component.setState({
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
      component.setState({
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

const queryActionDesktop = (component, e) => {
    e.preventDefault();
    fetch(`${component.state.api}select?indent=true&q.op=OR&q=name%3A
           ${component.state.query}%20popular_tags%3A
           ${component.state.query}%20game_description%3A${component.state.query}&rows=10`)
    .then(response => response.json())
    .then(data => console.log(data));

    setTimeout(() => {
      component.setState({
        desktopView: {
          alignmentY: 'flex-start',
          logoDisplay: 'none',
          miniLogoDisplay: 'flex',
          searchMaxWidth: '70vw',
        },
        documentIconDesktop: {
          animation: true,
          display: 'block'
        }
      });
    }, 300);

    setTimeout(() => {
      component.setState({
        documentIconDesktop: {
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

export {queryAction, queryActionDesktop};