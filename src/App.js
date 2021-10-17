import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Resume from "./components/Resume";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/project" component={Portfolio} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
