import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom'

import Home from './components/home'
import Product from './components/product'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/product'><Product /></Route>
      </Switch>
    </Router>
  );
}

export default App;
