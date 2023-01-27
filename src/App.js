import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/home" >
            <h2>Welcome</h2>
          </Route>
          <Route exact path="/:number" component={Number} />
          <Route exact path="/:word/:color/:bgColor" component={Hello} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
