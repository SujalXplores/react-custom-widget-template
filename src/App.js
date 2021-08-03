import React from 'react';
import { FloatingButton } from './custom-feedback/button/FloatingButton';

function App() {
  return (
    <FloatingButton
      label="Feedback"
      icon="💌"
      color="red"
      align="right"
      font_color="white"
      background_color="black"
    />
  );
}

export default App;
