import React from 'react';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import Checkbox from './Checkbox';

const Container = styled.div`
  width: 232px;
  height: 252px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1px;
`;

const Header = styled.div`
  margin-top: 19px;
  margin-left: 19px;
  margin-bottom: 20px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4a4a4a;
`;

const CheckboxContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxText = styled.span`
  margin-left: 8px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: #4a4a4a;
`;

const FilterTransfer = (props) => {
  const { handleCheckboxChange, status } = props;
  const renderCheckboxes = () => {
    const arr = [
      ['all', 'все'],
      ['0tranfers', 'Без пересадок'],
      ['1tranfers', '1 пересадка'],
      ['2tranfers', '2 пересадки'],
      ['3tranfers', '3 пересадки'],
    ];
    return arr.map(([transfersCount, text]) => (
      <Label key={transfersCount}>
        <Checkbox
          checked={status.indexOf(transfersCount) !== -1}
          onChange={handleCheckboxChange(transfersCount)}
        />
        <CheckboxText>{text}</CheckboxText>
      </Label>
    ));
  };

  return (
    <Container>
      <Header>количество пересадок</Header>
      <CheckboxContainer>{renderCheckboxes()}</CheckboxContainer>
    </Container>
  );
};

export default FilterTransfer;

FilterTransfer.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  status: PropTypes.arrayOf(string).isRequired,
};
