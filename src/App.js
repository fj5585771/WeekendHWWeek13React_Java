import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import NavBar from "./components/NavBar";

const App = () => {

  return (
      <Router>
        <>
        <NavBar />
          <Route 
          exact path = "/" component={MainContainer}/>

        </>      
      </Router>
  );
}

export default App;
