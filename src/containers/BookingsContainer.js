import React, {useState, useEffect} from "react";
import {Route} from 'react-router-dom';
import BookingsList from "../components/BookingsList";

const BookingsContainer = () => {

  const [bookings, setBookings] = useState([]);

  const getBookings = () => {
      console.log("getting bookings information");

      const bookingsUrl = '/bookings';
      fetch(bookingsUrl)
      .then(res => {
      console.log(res);
      });

      // res.json())
      // .then(data => setBookings(data));

  }

  useEffect(() => {
    getBookings();
  }, []); 

    return (
      <>

        <Route render= {() => {
          return <BookingsList bookings ={bookings}/>
        }} />

      </>

    )
}

export default BookingsContainer;