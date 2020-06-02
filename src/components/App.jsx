import React from 'react';
import axios from 'axios';
import { format, compareAsc } from 'date-fns';
import Card from './Card';

export default class App extends React.Component {
  state = {
    url: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
  };

  async componentDidMount() {
    const response = await axios.get('https://front-test.beta.aviasales.ru/search');
    console.log(response.data);
    const { searchId } = response.data;
    console.log(searchId);
    const tickets = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    );
    console.log(tickets.data);
    const tickets1 = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    );
    console.log(tickets1.data);
    const data1 = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
    console.log(data1);
  }

  render() {
    return (
      <>
        <div>Res</div>
        <Card />
      </>
    );
  }
}
