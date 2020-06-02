import React from 'react';
import axios from 'axios';
// import { format } from 'date-fns';
import Card from './Card';

export default class App extends React.Component {
  state = {
    searchIdLink: 'https://front-test.beta.aviasales.ru/search',
    getTicketsLink: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
    tickets: [],
  };

  async componentDidMount() {
    const { searchIdLink, getTicketsLink } = this.state;
    const response = await axios.get(searchIdLink);
    console.log(response.data);
    const { searchId } = response.data;
    console.log(searchId);
    const ticketsList = await axios.get(`${getTicketsLink}${searchId}`);
    console.log(ticketsList.data.tickets);
    // tickets = tickets.data.tickets;
    // this.setState(() => ({ tickets: tickets.data }));
    this.setState({ tickets: ticketsList.data.tickets });
    // const data1 = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
    // console.log(data1);
  }

  componentDidUpdate() {
    const { tickets } = this.state;
    console.log(tickets);
  }

  render() {
    return (
      <>
        <Card />
      </>
    );
  }
}
