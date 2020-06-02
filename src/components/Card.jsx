import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../index.css';

const Container = styled.div`
  position: relative;
  width: 502px;
  height: 184px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
`;
const Header = styled.div`
  position: relative;
  width: 432px;
  height: 36px;
  left: 20px;
  top: 26px;
  border: 1px solid black;
  /* display: flex;
  justify-content: space-between; */
`;

const Price = styled.div`
  position: absolute;
  top: 18.96%;
  /* @font-face {
     src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
     font-family: 'Open Sans';
  } */
  font-family: Open Sans;
  /* src: url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); */
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #2196f3;
`;

const Carrier = styled.img.attrs(
  (props) => ({ src: props.img })
)`  
    position: absolute;
    right: 0px;
    width: 110px;
    height: 36px;
    &:hover {
        cursor: pointer;
    }
`;

const Field = styled.div`
  height: 39px;
  width: 462px;
  margin-top: 40px;
  margin-left: 20px;
  border: 1px solid black;
  display: flex;
`;

const Route = styled.div`
  position: absolute;
  width: 141px;
  height: 39px;
  border: 1px solid black; 
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
  color: #A0B0B9;
  `;

const FieldValue = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4A4A4A;
`;

const Card = (props) => {
  const {
    price, carrier, forwardRoute, time
  } = props;
  const logoUrl = `http://pics.avs.io/99/36/${carrier}.png`;
  return (
    <Container>
      <Header>
        <Price>{price}</Price>
        <Carrier img={logoUrl} />
      </Header>
      <Field>
        <Route>
          <FieldHeader>{forwardRoute}</FieldHeader>
          <FieldValue>{time}</FieldValue>
        </Route>
      </Field>
    </Container>
  );
};

Card.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  forwardRoute: PropTypes.string.isRequired,
};

export default Card;
