import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import BookingsContainer from "./containers/BookingsContainer";

const App = () => {

  return (

      <Router>
      <Fragment>
        <Route 
        path = "/bookings" component={BookingsContainer}/>}

      </Fragment>      
      </Router>

  )
}

export default App;
