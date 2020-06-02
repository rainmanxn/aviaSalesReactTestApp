import React from 'react';
import axios from 'axios';
// import { format } from 'date-fns';
import _ from 'lodash';
import Card from './Card';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchIdLink: 'https://front-test.beta.aviasales.ru/search',
      getTicketsLink: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
      tickets: [],
    };
  }

  async componentDidMount() {
    this.getTickets();
  }


  getTickets = async () => {
    const { searchIdLink, getTicketsLink } = this.state;
    const response = await axios.get(searchIdLink);
    // console.log(response.data);
    const { searchId } = response.data;
    // console.log(searchId);
    const ticketsList = await axios.get(`${getTicketsLink}${searchId}`);
    // console.log(ticketsList.data.tickets);
    // tickets = tickets.data.tickets;
    // this.setState(() => ({ tickets: tickets.data }));
    this.setState({ tickets: ticketsList.data.tickets });
  }


  render() {
    const { tickets } = this.state;
    console.log(tickets[0]);
    const tick = tickets.splice(0, 5);
    return (
      tick.map((el) => (<Card key={_.uniqueId()} price={el.price} carrier={el.carrier} />))
    );
  }
}
