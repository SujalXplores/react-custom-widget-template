import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  opacity: 0;
  min-width: 30vw;
  min-height: 60vh;
  background: #ffffff;
  ${(props) => (props.align ? props.align : 'right')}: 1rem;
  border-radius: 5px;
  padding: 1rem 1rem;
  box-shadow: 0px 0px 15px grey;
  display: flex;
  flex-direction: column;
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

export const InnerContainer = (props) => {
  return (
    <React.Fragment>
      <Container {...props}>
        <span style={{ marginBottom: '10px' }}>
          {props.label || 'Powered by Trivians'}
        </span>
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
