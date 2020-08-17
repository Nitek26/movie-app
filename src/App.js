import React from 'react';
import HelloWorldFromCreateElement from './hellos/helloWorldFromCreateElement';
import HelloWorldFromComponent from './hellos/helloWorldFromComponent';
import HelloWorldFromPureComponent from './hellos/helloWorldFromPureComponent';
import HelloWorldFromFunctionalComponent from './hellos/helloWorldFromFunctionalComponent';

import './App.css';

function App() {
  return (
  <div>
    {HelloWorldFromCreateElement}
    <HelloWorldFromComponent />
    <HelloWorldFromPureComponent />
    <HelloWorldFromFunctionalComponent />
  </div>
  );
}

export default App;
