import "./App.css";
import { Main } from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import AnimationProject from "./components/AnimationProject/AnimationProject";

function App() {
  return (
    <div className="App">
      <Nav />

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="page"
              mountOnEnter
              unmountOnExit
            >
              <Switch location={location}>
                <Route exact path="/" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/project" component={AnimationProject} />
                <Route exact path="/more-project" component={Project} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      ></Route>
    </div>
  );
}

export default App;
