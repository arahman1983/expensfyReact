import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import createHistory from "history/createBrowserHistory";
import ExpinseDashboardPage from "./component/ExpinseDashboardPage";
import AddExpinsePage from "./component/AddExpinsePage";
import EditExpinsePage from "./component/EditExpinsePage";
import NotFoundPage from "./component/NotFoundPage";
import LoginPage from "./component/login";
import PrivateRoute from "./PrivateRout";
import PuplicRoute from "./PuplicRout";

export const history = createHistory();

const App = () => (
  <Router history={history}>
    <div className="container-fluid">
      <Switch>
        <PuplicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpinseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpinsePage} />
        <PrivateRoute path="/edit/:id" component={EditExpinsePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
