import React from 'react';
import Cards from './Cards';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchIdLink: 'https://front-test.beta.aviasales.ru/search',
      getTicketsLink: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
      tickets: [],
    };
  }

  render() {
    return <Cards />;
  }
}
