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
    filtered: [],
  };

  async componentDidMount() {
    this.getTickets();
  }

  // async componentDidUpdate() {
  //   this.getTickets();
  // }

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
    // this.getTransferCountFilteredArr(ticketsList.data.tickets);
    this.setState({ tickets: ticketsList.data.tickets });
    this.setState({ filtered: ticketsList.data.tickets });
  };

  getTransferCountFilteredArr = (tickets, curStatus = []) => {
    // const { status } = this.state;
    console.log('in function', curStatus);
    console.log('in function tickets', tickets);
    if (curStatus.length === 4) {
      this.setState({ filtered: tickets });
      return;
    }
    console.log('TUT!!!', tickets[0]);
    console.log('TUT!!!', tickets[0].segments[0].stops.length);
    console.log('TUT!!!', tickets[0].segments[1].stops.length);

    const filteredTickets = tickets.filter((el) => (curStatus.indexOf(el.segments[0].stops.length) === -1
      && curStatus.indexOf(el.segments[1].stops.length) === -1));
    // for (let i = 0; i < curStatus.length; i += 1) {
    //   let arr = [];
    //   arr = tickets.filter(
    //     (el) => el.segments[0].stops.length !== curStatus[i] && el.segments[1].stops.length !== curStatus[i]
    //   );
    //   filteredTickets = [...filteredTickets, ...arr];
    // }


    console.log('!!!result', filteredTickets);
    this.setState({ filtered: filteredTickets });
  };

  updateFilteredTransfer = (value) => {
    const { tickets } = this.state;
    // console.log('Value:', value);
    // const { status } = this.state;
    const status = [0, 1, 2, 3];
    // console.log('status:', status);
    const res = status.filter((el) => value.indexOf(el) === -1);
    // console.log('res', res);
    this.setState({ status: res });
    this.getTransferCountFilteredArr(tickets, res);
  };

  render() {
    const { filtered, status, tickets } = this.state;
    // console.log('App:', status);
    // console.log('filtered:', filtered);
    // console.log('NONfiltered:', tickets);
    return (
      <>
        <FilterTransfer updateFilteredTransfer={this.updateFilteredTransfer} />
        <Cards tickets={filtered} />
      </>
    );
  }
}
