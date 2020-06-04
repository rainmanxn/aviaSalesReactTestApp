import React from 'react';
import styled from 'styled-components';
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
  color: #4A4A4A;
`;

const CheckboxContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export default class FilterTransfer extends React.Component {
  state = {
    checked: false,
    filterStatus: [],
  }

  handleCheckboxChange = (event) => {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return (
      <Container>
        <Header>количество пересадок</Header>
        <CheckboxContainer>
          <Label>
            <label>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              <span style={{ marginLeft: 8 }}>Label Text</span>
            </label>
          </Label>
          <Label>
            <label>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              <span style={{ marginLeft: 8 }}>Label Text</span>
            </label>
          </Label>
        </CheckboxContainer>
      </Container>
    );
  }
}
