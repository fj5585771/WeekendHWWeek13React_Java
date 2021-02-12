import React, {useEffect, useState} from "react";
import BookingList from "./BookingList";

const BookingsSystem = () => {

    const [bookings, setBookings] = useState({});

    const getBookings = () => {
        console.log("getting bookings information");

        fetch('/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(console.error());

    }

    useEffect(() => {
        getBookings();
    }, []);         // second argument not needed but entered anyway

    return (

        
        // This will control the state of the front end
        <>
            <h1>Bookings information</h1>
            <BookingList/>
        </>


    
    );
}

export default BookingsSystem;