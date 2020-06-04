import React from 'react';
import axios from 'axios';
import Cards from './Cards';
import FilterTransfer from './FilterTransfer';

// const App = () => (
//   <>
//     <FilterTransfer />
//     <Cards />
//   </>
// );

export default class App extends React.Component {
  state = {
    searchIdLink: 'https://front-test.beta.aviasales.ru/search',
    getTicketsLink: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
    tickets: [],
    status: [0, 1, 2, 3],
  };

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
    this.getTransferCountFilteredArr([1, 2, 3], ticketsList.data.tickets);
    // this.setState({ tickets: ticketsList.data.tickets });
  };

  getTransferCountFilteredArr = (values, tickets) => {
    if (values.length === 0) {
      this.setState({ tickets });
      return;
    }
    let res = [...tickets];
    for (let i = 0; i < values.length; i += 1) {
      res = res.filter((el) => (
        el.segments[0].stops.length !== values[i] && el.segments[1].stops.length !== values[i]
      ));
    }
    this.setState({ tickets: res });
  }

  updateFilteredTransfer = (value) => {
    const { status } = this.state;
    const res = status.map((el) => el !== value);
    this.setState({ status: res });
  }

  render() {
    const { tickets } = this.state;
    return (
      <>
        <FilterTransfer updateFilteredTransfer={this.updateFilteredTransfer} />
        <Cards tickets={tickets} />
      </>
    );
  }
}
