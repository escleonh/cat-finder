import './App.css';
import Cats from './Cats';
import Home from './Home';
import Navbar from './Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="content">
        <Switch>
        <Route path="/cats">
          <Cats/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
