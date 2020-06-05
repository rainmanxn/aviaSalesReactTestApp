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

  async componentDidUpdate() {
    this.getTickets();
  }

  getTickets = async () => {
    const { searchIdLink, getTicketsLink, status } = this.state;
    const response = await axios.get(searchIdLink);
    // console.log(response.data);
    const { searchId } = response.data;
    // console.log(searchId);
    const ticketsList = await axios.get(`${getTicketsLink}${searchId}`);
    // console.log(ticketsList.data.tickets);
    // tickets = tickets.data.tickets;
    // this.setState(() => ({ tickets: tickets.data }));
    this.getTransferCountFilteredArr(ticketsList.data.tickets);
    // this.setState({ tickets: ticketsList.data.tickets });
  };

  getTransferCountFilteredArr = (tickets) => {
    const { status } = this.state;
    console.log('in function', status);
    if (status.length === 0) {
      this.setState({ tickets });
      return;
    }
    let res = [...tickets];
    for (let i = 0; i < status.length; i += 1) {
      res.filter(
        (el) =>
          el.segments[0].stops.length !== status[i] && el.segments[1].stops.length !== status[i]
      );
    }
    console.log(res);
    this.setState({ tickets: res });
  };

  updateFilteredTransfer = (value) => {
    console.log('Value:', value);
    // const { status } = this.state;
    let status = [0, 1, 2, 3];
    // console.log('status:', status);
    const res = status.filter((el) => value.indexOf(el) === -1);
    this.setState({ status: res });
  };

  render() {
    const { tickets, status } = this.state;
    console.log('App:', status);
    return (
      <>
        <FilterTransfer updateFilteredTransfer={this.updateFilteredTransfer} />
        <Cards tickets={tickets} />
      </>
    );
  }
}
