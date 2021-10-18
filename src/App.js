import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Resume from "./components/Resume";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/project" component={Portfolio} />
            <Route exact path="/contact" component={ContactForm} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
