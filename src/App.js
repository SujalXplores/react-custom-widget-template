import React, { useState } from 'react';
import { Widget } from './Widget/Widget';

const App = () => {
  const [config] = useState(window.init);

  console.log(config);

  return <Widget {...config} />;
};

export default App;
