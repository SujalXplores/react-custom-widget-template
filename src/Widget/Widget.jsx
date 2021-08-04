import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerContainer } from './InnerContainer';

const Button = styled.button`
  border: none;
  color: #ffffff;
  background: ${(props) => props.button_color || 'black'};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  position: fixed;
  ${(props) => (props.align ? props.align : 'right')}: 25px;
  bottom: 25px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  position: fixed;
  ${(props) => (props.align ? props.align : 'right')}: 25px;
  bottom: 25px;
  border-radius: 50%;
  transition: all 0.5s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const Img = styled.img`
  vertical-align: middle;
`;

export const Widget = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleWidget = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <React.Fragment>
      <Container {...props}>
        <Button {...props} onClick={toggleWidget}>
          <Img src={props.logo} alt="logo" width="25px" height="25px" />
        </Button>
      </Container>
      {isFormVisible && <InnerContainer {...props} />}
    </React.Fragment>
  );
};
