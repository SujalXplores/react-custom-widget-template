import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

export const UniversalStyle = createGlobalStyle`
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
  }
`;

/**
 * el = generating unique element, in which our plugin will render.
 * where the id of the element is unique so not to worry about collisions.
 * after assigning id to the element, ReactDOM.render will take over everything.
 **/

if (!window.init.disabled) {
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
