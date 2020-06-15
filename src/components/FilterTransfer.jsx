import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

export default class FilterTransfer extends React.Component {
  state = {
    filterStatus: ['all'],
  };

  handleCheckboxChange = (value) => (event) => {
    if (value === 'all') {
      this.setState({ filterStatus: ['all'] });
      this.update(value);
      return;
    }
    const { filterStatus } = this.state;
    let res = filterStatus;
    if (res.indexOf('all') !== -1) {
      res = [];
    }
    if (event.target.checked) {
      res = [...res, value];
      this.setState({ filterStatus: res });
    }
    if (!event.target.checked) {
      res = res.filter((el) => el !== value);
      this.setState({ filterStatus: res });
    }
    // this.setState({ checked: event.target.checked });
    this.update(res);
  };

  update = (value) => {
    const { updateFilteredTransfer } = this.props;
    updateFilteredTransfer(value);
  };

  renderCheckboxes = () => {
    const { filterStatus } = this.state;
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
          checked={filterStatus.indexOf(transfersCount) !== -1}
          onChange={this.handleCheckboxChange(transfersCount)}
        />
        <CheckboxText>{text}</CheckboxText>
      </Label>
    ));
  };

  render() {
    return (
      <Container>
        <Header>количество пересадок</Header>
        <CheckboxContainer>{this.renderCheckboxes()}</CheckboxContainer>
      </Container>
    );
  }
}

FilterTransfer.propTypes = {
  updateFilteredTransfer: PropTypes.func.isRequired,
};
