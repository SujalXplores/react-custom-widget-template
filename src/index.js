import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

export const UniversalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,400&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${(props) => props && '#' + props.widget} {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

/**
 * el = generating unique element, in which our plugin will render.
 * where the id of the element is unique so not to worry about collisions.
 * after assigning id to the element, ReactDOM.render will take over everything.
 **/

// TODO if init is not there it throws an error

if (window.init && !window.init.disabled) {
  const el = document.createElement('div');
  el.id = 'widget__' + Math.random().toString(36).slice(2);
  document.body.appendChild(el);

  ReactDOM.render(
    <React.StrictMode>
      <UniversalStyle widget={el.id} />
      <App />
    </React.StrictMode>,
    document.getElementById(el.id)
  );
}
