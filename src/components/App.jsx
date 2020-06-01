import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    url: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
  }

  async componentDidMount() {
    const response = await axios.get('https://front-test.beta.aviasales.ru/search');
    console.log(response.data);
    const { searchId } = response.data;
    console.log(searchId);
    const tickets = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
    console.log(tickets.data);
  }

  render() {
    return <div>Res</div>;
  }
}
