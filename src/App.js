import './App.css';
import BookingsSystem from "./BookingsSystem.js";
import React, {useEffect, useState} from "react";

function App() {

  const [bookings, setBookings] = useState([]);

  const getBookings = () => {
      console.log("getting bookings information");

      const url = "http://localhost:8080/bookings";
      fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
  }

  useEffect(() => {
      getBookings();
  }, []);  // second argument not needed but entered anyway

  return (

    <>
    <h1>Bookings System app</h1>
    
    <div id= "bookingComponent">

      <BookingsSystem />

    </div>

   </>
  );
}

export default App;
