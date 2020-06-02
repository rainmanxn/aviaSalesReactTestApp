import React from 'react';
import styled from 'styled-components';

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
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  position: absolute;
  top: 18.96%;
  font-family: Open Sans;
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

const Card = (props) => {
  const { price, carrier } = props;
  const logoUrl = `http://pics.avs.io/99/36/${carrier}.png`;
  return (
    <Container>
      <Header>
        <Price>{price}</Price>
        <Carrier img={logoUrl} />
      </Header>
    </Container>
  );
};

export default Card;
