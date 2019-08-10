import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

const HomePage = () => (
  <div>
    <h1>Ehh wtf</h1>
  </div>
);
const AnotherPage = () => (
  <div>
    <h1>Workss?..</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/another' component={AnotherPage} />
      </Switch>
    </div>
  );
}

export default App;
