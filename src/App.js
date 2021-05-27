import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router-dom";


// Import Components
import CHeader from "./components/CHeader"
import CMain from "./components/CMain";
import CListPage from "./components/CListPage";


function App() {

  return (
    <div className="App">
    <Router>
        <CHeader />

        <Switch>

          {/* Home Page */}
          <Route exact path="/">
            <CMain />
          </Route>

          {/* List Users Page */}
          <Route path="/ListPage">
            <CListPage />
          </Route>

        </Switch>

   </Router>

    </div>
  );
}


export default App;
