import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 503px;
  height: 50px;
  display: flex;
`;

const Button = styled.button`
  width: 252px;
  height: 50px;
  border: 1px solid #dfe5ec;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.active ? '#2196f3' : '#FFFFFF')};
  border-radius: ${(props) => (props.first ? '10px 0 0 10px' : '0 10px 10px 0')};
  :focus {
    outline: none;
  }
`;

const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: #ffffff;
  color: ${(props) => (props.active ? '#FFFFFF' : '#4A4A4A')};
`;

export default class CheapFastFilter extends React.Component {
  state = {
    isActiveCheap: false,
    isActiveFast: false,
  };

  handleClickCheap = (e) => {
    const { isActiveCheap } = this.state;
    e.preventDefault();
    this.setState({ isActiveCheap: !isActiveCheap });
  };

  render() {
    const { isActiveCheap } = this.state;
    return (
      <Container>
        <Button active={isActiveCheap} first onClick={this.handleClickCheap}>
          <Text active={isActiveCheap}>самый дешевый</Text>
        </Button>
        <Button active={isActiveFast}>
          <Text active={isActiveFast}>самый быстрый</Text>
        </Button>
      </Container>
    );
  }
}
