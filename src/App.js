import React, { useState } from 'react';
import { FloatingButton } from './custom-feedback/button/FloatingButton';

const App = () => {
  const [user] = useState(window.init);
  console.log(user);
  return (
    <FloatingButton
      label="Feedback"
      icon="💌"
      align="right"
      font_color="white"
      background_color="black"
    />
  );
};

export default App;
