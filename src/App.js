import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/homePage";
import RepoList from "./components/repoList";
import RepoDetails from "./components/repoDetails";
import "./styles.css";

export default function App(props) {
  const [currentRepo, setCurrentRepo] = useState({});
  const handleClick = (props, username, repoId, repo) => {
    console.log(repo);
    setCurrentRepo(repo);
    props.history.push(`/repos/${username}/${repoId}`);
  };
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/repos-list/:username"
        render={(props) => <RepoList {...props} handleClick={handleClick} />}
      />
      <Route
        exact
        path="/repos/:username/:repoId"
        render={(props) => <RepoDetails {...props} repo={currentRepo} />}
      />
    </Switch>
  );
}
