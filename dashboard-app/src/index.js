import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Contact from "./components/Contact";
import Aside from "./components/Aside";
import NotFound from "./components/NotFound";
import "./style.css";
import SingleArticle from "./components/SingleArticle";
import Articles from "./components/Articles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/contact">
        <div className="container">
          <Aside />
          <Contact />
        </div>
      </Route>
      <Route path="/articles">
        <div className="container">
          <Aside />
          <Articles />
        </div>
      </Route>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="post/:slug" component={SingleArticle} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
