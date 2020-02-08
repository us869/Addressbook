import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    const footerProps = {
      website: "umer.epizy.com",
      company: "Up Styler",
      year: 2019
    };

    return (
      <div className="app">
        <AppHeader
          title="Addressbook App - v1.0"
          subheading="Created by Up Styler"
        />
        <AppContent />
        <AppFooter {...footerProps} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
