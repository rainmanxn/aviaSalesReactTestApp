import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../index.css';

const Container = styled.div`
  width: 502px;
  height: 184px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  padding: 1px;
`;
const Header = styled.div`
  width: 432px;
  height: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #2196f3;
`;

const Carrier = styled.img.attrs((props) => ({ src: props.img }))`
  width: 110px;
  height: 36px;
  &:hover {
    cursor: pointer;
  }
`;

const Field = styled.div`
  height: 39px;
  width: 462px;
  margin-bottom: 10px;
  margin-left: 20px;
  display: flex;
`;

const Route = styled.div`
  width: 141px;
  height: 39px;
  display: flex;
  flex-direction: column;
`;

const FieldHeader = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const FieldValue = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4a4a4a;
`;


const Card = (props) => {
  const {
    price,
    carrier,
    forwardRoute,
    timeForwardStart,
    timeForwardDestination,
    timeFlightForward,
    stopsForward,
    countStopsPhrase,
    backRoute,
    timeBackdStart,
    timeBackDestination,
    timeFlightBack,
    stopsBack,
    countStopsPhraseBack,
  } = props;
  const logoUrl = `http://pics.avs.io/99/36/${carrier}.png`;
  return (
    <Container>
      <Header>
        <Price>{`${price.toLocaleString().split(',').join(' ')} Р`}</Price>
        <Carrier img={logoUrl} />
      </Header>
      <Field>
        <Route>
          <FieldHeader>{forwardRoute}</FieldHeader>
          <FieldValue>{`${timeForwardStart} - ${timeForwardDestination}`}</FieldValue>
        </Route>
        <Route>
          <FieldHeader>В пути</FieldHeader>
          <FieldValue>{timeFlightForward}</FieldValue>
        </Route>
        <Route>
          <FieldHeader>{`${countStopsPhrase}`}</FieldHeader>
          <FieldValue>{stopsForward}</FieldValue>
        </Route>
      </Field>
      <Field>
        <Route>
          <FieldHeader>{backRoute}</FieldHeader>
          <FieldValue>{`${timeBackdStart} - ${timeBackDestination}`}</FieldValue>
        </Route>
        <Route>
          <FieldHeader>В пути</FieldHeader>
          <FieldValue>{timeFlightBack}</FieldValue>
        </Route>
        <Route>
          <FieldHeader>{`${countStopsPhraseBack}`}</FieldHeader>
          <FieldValue>{stopsBack}</FieldValue>
        </Route>
      </Field>
    </Container>
  );
};

Card.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  forwardRoute: PropTypes.string.isRequired,
  timeForwardStart: PropTypes.string.isRequired,
  timeForwardDestination: PropTypes.string.isRequired,
  timeFlightForward: PropTypes.string.isRequired,
  stopsForward: PropTypes.string.isRequired,
  countStopsPhrase: PropTypes.string.isRequired,
  backRoute: PropTypes.string.isRequired,
  timeBackdStart: PropTypes.string.isRequired,
  timeBackDestination: PropTypes.string.isRequired,
  timeFlightBack: PropTypes.string.isRequired,
  stopsBack: PropTypes.string.isRequired,
  countStopsPhraseBack: PropTypes.string.isRequired,
};

export default Card;
