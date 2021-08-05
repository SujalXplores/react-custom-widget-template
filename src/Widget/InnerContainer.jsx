import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  opacity: 0;
  width: 332px;
  min-width: 30vw;
  min-height: 60vh;
  background: #ffffff;
  ${(props) => (props.align ? props.align : 'right')}: 0;
  margin: 0.5rem;
  border-radius: 5px;
  padding: 1rem 1rem;
  box-shadow: 0px 0px 15px grey;
  animation: fadein 1s forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 50vh;
`;

const Span = styled.span`
  margin-bottom: 10px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
`;

const CloseButton = styled.span`
  float: right;
  cursor: pointer;
  font-weight: bold;
  display: block;
  background: gray;
  color: lightgray;
  width: 20px;
  text-align: center;
`;

export const InnerContainer = (props) => {
  return (
    <React.Fragment>
      <Container {...props}>
        <CloseButton onClick={props.onClick}>X</CloseButton>
        <Span>{props.label || 'Powered by Trivians'}</Span>
        <Iframe
          title="SujalShah"
          allowFullScreen
          src={props.link}
          frameBorder="0"
        ></Iframe>
      </Container>
    </React.Fragment>
  );
};
