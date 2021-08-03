import React, { useRef } from 'react';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

const Form = styled.form`
  opacity: 0;
  width: 25vw;
  right: 3rem;
  min-width: auto;
  border-top: 5px solid royalblue;
  border-radius: 5px;
  bottom: 4.5rem;
  position: fixed;
  padding: 1rem 1rem;
  box-shadow: 0px 5px 5px grey;
  display: flex;
  flex-direction: column;
  animation: fadein 2s forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5rem 0;
  background: lightgray;
  border: none;
  border-radius: 3px;

  &:focus {
    color: black;
  }
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1rem 0;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: royalblue;
  border: 2px solid royalblue;
  cursor: pointer;
`;

export const FeedbackForm = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const descRef = useRef();
  let ratingValue;

  const starsConfig = {
    size: 30,
    value: 2.5,
    edit: true,
    onChange: (newValue) => {
      ratingValue = newValue;
    },
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(descRef.current.value);
    console.log(ratingValue);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label>Name</label>
      <Input ref={nameRef} placeholder="Name" type="text" />
      <label>Email</label>
      <Input ref={emailRef} placeholder="Email" type="email" />
      <label>Description</label>
      <Input ref={descRef} placeholder="Give us your valuable feedback" />
      <label>Rating</label>
      <ReactStars {...starsConfig} />
      <Button>Submit</Button>
    </Form>
  );
};
