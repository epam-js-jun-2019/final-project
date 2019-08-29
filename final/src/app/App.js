import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Catched from '../Cached'
import Header from "../header";
import Main from "../main";
const App = () => {
  return (
    <Fragment>
    <Header/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catched" exact component={Catched}/>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Fragment>
  );
};

export default App;
