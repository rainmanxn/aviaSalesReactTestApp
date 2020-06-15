import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import __ from 'lodash';
import Cards from './Cards';
import FilterTransfer from './FilterTransfer';
import CheapFastFilter from './CheapFastFilter';
import logo from '../img/logo.svg';

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
    // status: [0, 1, 2, 3],
    filtered: [],
    filt: '',
  };

  async componentDidMount() {
    this.getTickets();
  }

  getTickets = async () => {
    const { searchIdLink, getTicketsLink } = this.state;
    try {
      const response = await axios.get(searchIdLink);
      const { searchId } = response.data;
      const ticketsList = await axios.get(`${getTicketsLink}${searchId}`);
      const tickets = ticketsList.data.tickets.map((el) => ({ ...el, id: __.uniqueId() }));
      this.setState({ tickets });
      this.setState({ filtered: tickets });
    } catch {
      this.getTickets();
    }
  };

  getTransferCountFilteredArr = (tickets, curStatus = []) => {
    if (curStatus.length === 4) {
      const filteredTickets = this.sortArr(tickets);
      this.setState({ filtered: filteredTickets });
      return;
    }

    let filteredTickets = tickets.filter(
      (el) => curStatus.indexOf(el.segments[0].stops.length) === -1
        && curStatus.indexOf(el.segments[1].stops.length) === -1
    );
    filteredTickets = this.sortArr(filteredTickets);
    this.setState({ filtered: filteredTickets });
  };

  updateFilteredTransfer = (value) => {
    const { tickets } = this.state;
    const status = [0, 1, 2, 3];
    if (value === -1) {
      this.getTransferCountFilteredArr(tickets, status);
      return;
    }
    const res = status.filter((el) => value.indexOf(el) === -1);
    // this.setState({ status: res });
    this.getTransferCountFilteredArr(tickets, res);
  };

  cheapFastGetFilter = (value) => {
    const { filtered } = this.state;
    this.setState({ filt: value });
    if (value === 'cheapest') {
      const arr = filtered;
      arr.sort((first, second) => first.price - second.price);
      this.setState({ filtered: arr });
      return;
    }
    if (value === 'fast') {
      const arr = filtered;
      arr.sort((first, second) => (first.segments[0].duration + first.segments[1].duration)
        - (second.segments[0].duration + second.segments[1].duration));
      this.setState({ filtered: arr });
    }
    // this.setState({ filtered });
  }

  sortArr = (array) => {
    const { filt } = this.state;
    if (filt === 'cheapest') {
      const arr = array;
      arr.sort((first, second) => first.price - second.price);
      return arr;
    }
    if (filt === 'fast') {
      const arr = array;
      arr.sort((first, second) => (first.segments[0].duration + first.segments[1].duration)
        - (second.segments[0].duration + second.segments[1].duration));
      return arr;
    }
    return array;
    // this.setState({ filtered });
  }

  render() {
    const { filtered } = this.state;
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
