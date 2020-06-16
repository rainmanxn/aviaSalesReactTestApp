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
    status: ['all'],
    buttonState: 'default',
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
    if (status.indexOf('all') !== -1) {
      const filteredTickets = this.sortArr(tickets);
      return filteredTickets;
    }
    const curStatusToNum = status.map((el) => Number(el[0]));
    let filteredTickets = tickets.filter(
      (el) => curStatusToNum.indexOf(el.segments[0].stops.length) !== -1
        && curStatusToNum.indexOf(el.segments[1].stops.length) !== -1
    );
    filteredTickets = this.sortArr(filteredTickets);
    return filteredTickets;
  };

  handleCheckboxChange = (value) => () => {
    if (value === 'all') {
      this.setState({ status: ['all'] });
      return;
    }
    let { status } = this.state;

    if (status.indexOf('all') !== -1) {
      status = [];
    }
    if (status.indexOf(value) === -1) {
      status = [...status, value];
      this.setState({ status });
    } else {
      status = status.filter((el) => el !== value);
      if (status.length === 0) {
        this.setState({ status: ['all'] });
        return;
      }
      this.setState({ status });
    }
  };

  handleClickCheap = () => {
    const { buttonState } = this.state;
    if (buttonState !== 'cheapest') {
      this.setState({ buttonState: 'cheapest' });
      return;
    }
    this.setState({ buttonState: 'default' });
  };

  handleClickFast = () => {
    const { buttonState } = this.state;
    if (buttonState !== 'fast') {
      this.setState({ buttonState: 'fast' });
      return;
    }
    this.setState({ buttonState: 'default' });
  };

  renderFastGetFilter = (tickets) => {
    const { buttonState } = this.state;
    if (buttonState === 'cheapest') {
      const arr = tickets;
      arr.sort((first, second) => first.price - second.price);
      return arr;
    }
    if (buttonState === 'fast') {
      const arr = tickets;
      arr.sort((first, second) => (first.segments[0].duration + first.segments[1].duration)
        - (second.segments[0].duration + second.segments[1].duration));
      return arr;
    }
    return tickets;
  }

  sortArr = (array) => {
    const { buttonState } = this.state;
    if (buttonState === 'cheapest') {
      return array.sort((first, second) => first.price - second.price);
    }
    if (buttonState === 'fast') {
      return array.sort((first, second) => (first.segments[0].duration + first.segments[1].duration)
        - (second.segments[0].duration + second.segments[1].duration));
    }
    return array;
  }

  render() {
    const { tickets, buttonState, status } = this.state;
    let filtered = this.renderFastGetFilter(tickets);
    filtered = this.getTransferCountFilteredArr(filtered);
    return (
      <Container>
        <Logo img={logo} />
        <Main>
          <FilterTransfer
            handleCheckboxChange={this.handleCheckboxChange}
            status={status}
          />
          <Main1>
            <CheapFastFilter
              buttonState={buttonState}
              cheapFastGetFilter={this.cheapFastGetFilter}
              handleClickCheap={this.handleClickCheap}
              handleClickFast={this.handleClickFast}
            />
            <Cards tickets={filtered} />
          </Main1>
        </Main>
      </Container>
    );
  }
}
