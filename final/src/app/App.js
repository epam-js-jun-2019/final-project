import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Catched from '../Catched'
import Header from "../header";
import Main from "../main";
import Profile from '../profile'
const App = () => {
  return (
    <Fragment>
    <Header/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catched" exact component={Catched}/>
        <Route path="/profile/:id" component={Profile}/>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Fragment>
  );
};

export default App;
