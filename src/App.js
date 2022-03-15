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
      <Header  />
      <Router>
      <Switch> 
          <Route path="/" exact component={UserList} />
          <Route
            path="/profile/:id" 
            render={(props) => <UserDetail {...props}/>} />
      </Switch>
      </Router>
       <Footer /> 
    </div>
  );
}

export default App;
