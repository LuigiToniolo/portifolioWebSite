// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

import { NavBar } from './components/NavBar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/aboutme">
            <AboutMe/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
