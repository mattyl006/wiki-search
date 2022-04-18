const queryRequest = (component) => {
  fetch(`${component.state.api}select?indent=true&q.op=OR&q=name%3A
  "${component.state.query}"%20popular_tags%3A
  "${component.state.query}"%20game_description%3A"${component.state.query}"&rows=10`)
  .then(response => response.json())
  .then(data => component.setState({results: data.response.docs}));
}


const queryAction = (component, e) => {
    e.preventDefault();
    setTimeout(() => {
      queryRequest(component);
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
        }
      });
    }, 3000);
}

const queryActionDesktop = (component, e) => {
    e.preventDefault();
    setTimeout(() => {
      queryRequest(component);
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
        }
      });
    }, 3000);
}

const setQuery = (component, e) => {
  let value = e.target.value;
  if(e.target.value == '') {
    component.setState({
      query: '*'
    });
  } else {
    component.setState({
      query: value
    });
  }
}

export {queryAction, queryActionDesktop, setQuery};