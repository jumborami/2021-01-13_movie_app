import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
const Home = React.lazy(() => import("./Home"));
const Upcoming = React.lazy(() => import("./Upcoming"));
const Detail = React.lazy(() => import("./Detail"));

export default () => (
  <Router>
    <>
    <Suspense fallback={<h1>Loading ⏱ datas</h1>}>
      <Switch>
        <Route path="/" exact component = { Home } />
        <Route path="/upcoming" component = { Upcoming } />
        <Route path="/:id" component = { Detail } />
      </Switch>
    </Suspense>
    </>
  </Router>
)