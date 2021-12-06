import './App.css';
import Header from './Header'
import SearchBar from './SearchBar'
import Content from './Content'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App__Header">
          <Header />
        </div>
        <Switch>
          < Route path="/">
            <div className="App__SearchBar">
              <SearchBar />
            </div>
          </Route>
          < Route path="/">

          </Route>
        </Switch>
        <div className="App__Body">
          <div className="App__Content"><Content /></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
