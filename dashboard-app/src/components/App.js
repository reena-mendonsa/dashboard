import React from "react";
import Aside from "./Aside";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section>
            <Aside />
          </section>
          <Home />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
