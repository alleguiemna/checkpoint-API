import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./UserList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetail from "./UserDetail";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* //<Header  /> */}
      <Router >
        <Switch>
          <Route path="/" component={Header}/>
          <Route path="/"  component={UserList} />
          <Route
            path="/profile/:id"
            exact
            render={(props) => <UserDetail {...props}/>} />
            <Route path="/" component={Footer}/>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
