import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cards from './Cards';
import FilterTransfer from './FilterTransfer';
import CheapFastFilter from './CheapFastFilter';
import logo from '../img/logo.svg';

// const App = () => (
//   <>
//     <FilterTransfer />
//     <Cards />
//   </>
// );
const Logo = styled.img.attrs((props) => ({ src: props.img }))`
  height: 70px;
  margin-top: 50px;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #F3F7FA;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Main1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

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
    // console.log('in function', curStatus);
    // console.log('in function tickets', tickets);
    if (curStatus.length === 4) {
      this.setState({ filtered: tickets });
      return;
    }
    // console.log('TUT!!!', tickets[0]);
    // console.log('TUT!!!', tickets[0].segments[0].stops.length);
    // console.log('TUT!!!', tickets[0].segments[1].stops.length);

    const filteredTickets = tickets.filter(
      (el) => curStatus.indexOf(el.segments[0].stops.length) === -1
        && curStatus.indexOf(el.segments[1].stops.length) === -1
    );

    // console.log('!!!result', filteredTickets);
    this.setState({ filtered: filteredTickets });
  };

  updateFilteredTransfer = (value) => {
    const { tickets } = this.state;
    // console.log('Value:', value);
    // const { status } = this.state;
    const status = [0, 1, 2, 3];
    if (value === -1) {
      this.getTransferCountFilteredArr(tickets, status);
      return;
    }
    // console.log('status:', status);
    const res = status.filter((el) => value.indexOf(el) === -1);
    // console.log('res', res);
    this.setState({ status: res });
    this.getTransferCountFilteredArr(tickets, res);
  };

  cheapFastGetFilter = (value) => {
    const { filtered } = this.state;
    if (value === 'cheapest') {
      const arr = filtered;
      arr.sort((a, b) => a.price - b.price);
      this.setState({ filtered: arr });
      console.log(arr);
    }
    if (value === 'fast') {
      const arr = filtered;
      arr.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
      this.setState({ filtered: arr });
      console.log(arr);
    }
  }

  render() {
    const { filtered, status, tickets } = this.state;
    // console.log('filtered:', filtered);
    // console.log('NONfiltered:', tickets);
    return (
      <Container>
        <Logo img={logo} />
        <Main>
          <FilterTransfer updateFilteredTransfer={this.updateFilteredTransfer} />
          <Main1>
            <CheapFastFilter cheapFastGetFilter={this.cheapFastGetFilter} />
            <Cards tickets={filtered} />
          </Main1>
        </Main>
      </Container>
    );
  }
}
