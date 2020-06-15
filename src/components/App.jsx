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
    tickets: [],
    status: ['0tranfers', '1tranfers', '2tranfers', '3tranfers'],
    filt: 'default',
  };

  searchIdLink = 'https://front-test.beta.aviasales.ru/search';

  getTicketsLink = 'https://front-test.beta.aviasales.ru/tickets?searchId=';

  async componentDidMount() {
    this.getTickets();
  }

  getTickets = async () => {
    try {
      const response = await axios.get(this.searchIdLink);
      const { searchId } = response.data;
      const ticketsList = await axios.get(`${this.getTicketsLink}${searchId}`);
      const tickets = ticketsList.data.tickets.map((el) => ({ ...el, id: __.uniqueId() }));
      this.setState({ tickets });
    } catch {
      this.getTickets();
    }
  };

  getTransferCountFilteredArr = (tickets) => {
    const { status } = this.state;
    if (status.length === 4) {
      const filteredTickets = this.sortArr(tickets);
      return filteredTickets;
    }
    const curStatusToNum = status.map((el) => Number(el[0]));
    let filteredTickets = tickets.filter(
      (el) => curStatusToNum.indexOf(el.segments[0].stops.length) === -1
        && curStatusToNum.indexOf(el.segments[1].stops.length) === -1
    );
    filteredTickets = this.sortArr(filteredTickets);
    return filteredTickets;
  };

  updateFilteredTransfer = (value) => {
    const tempStatus = ['0tranfers', '1tranfers', '2tranfers', '3tranfers'];
    // console.log(value);
    if (value === 'all' || value.length === 0) {
      this.setState({ status: ['all'] });
      return;
    }
    const res = tempStatus.filter((el) => value.indexOf(el) === -1);
    this.setState({ status: res });
  };

  cheapFastGetFilter = (value) => {
    this.setState({ filt: value });
  }

  renderFastGetFilter = (tickets) => {
    const { filt } = this.state;
    if (filt === 'cheapest') {
      const arr = tickets;
      arr.sort((first, second) => first.price - second.price);
      return arr;
    }
    if (filt === 'fast') {
      const arr = tickets;
      arr.sort((first, second) => (first.segments[0].duration + first.segments[1].duration)
        - (second.segments[0].duration + second.segments[1].duration));
      return arr;
    }
    return tickets;
  }

  sortArr = (array) => {
    const { filt } = this.state;
    if (filt === 'cheapest') {
      return array.sort((first, second) => first.price - second.price);
    }
    if (filt === 'fast') {
      return array.sort((first, second) => (first.segments[0].duration + first.segments[1].duration)
        - (second.segments[0].duration + second.segments[1].duration));
    }
    return array;
  }

  render() {
    const { tickets } = this.state;
    let filtered = this.renderFastGetFilter(tickets);
    filtered = this.getTransferCountFilteredArr(filtered);
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
