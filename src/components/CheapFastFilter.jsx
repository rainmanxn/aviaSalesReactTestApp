import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${(props) => (props.active ? '#FFFFFF' : '#4A4A4A')};
`;

const CheapFastFilter = (props) => {
  const { handleClickCheap, handleClickFast, buttonState } = props;
  return (
    <Container>
      <Button active={buttonState === 'cheapest'} first onClick={handleClickCheap}>
        <Text active={buttonState === 'cheapest'}>самый дешевый</Text>
      </Button>
      <Button active={buttonState === 'fast'} onClick={handleClickFast}>
        <Text active={buttonState === 'fast'}>самый быстрый</Text>
      </Button>
    </Container>
  );
};

export default CheapFastFilter;

CheapFastFilter.propTypes = {
  handleClickCheap: PropTypes.func.isRequired,
  handleClickFast: PropTypes.func.isRequired,
  buttonState: PropTypes.string.isRequired,
};
