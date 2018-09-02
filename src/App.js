import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import Single from "./components/TemplateSingle";
import Multiple from "./components/TemplateMultiple";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={StartPage} />
          <Route exact path="/single" component={Single} />
          <Route exact path="/multiple" component={Multiple} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
