import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/projects"}>
          <Projects />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/contact"}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
