import React from "react";
import Booking from "./Booking";

const BookingsList = ({bookings}) => {

    if (bookings.length ===0) {
        return (<p>Loading...</p>);
    }

    const bookingNodes = bookings.map((booking, index) => {
        return (
            
            <li key={index}>
            <div>
            <Booking booking={booking}/>
            </div>
            </li>
            
        )
    })

    return (
        <>
            <h4>Bookings</h4>
            <ul>
                {bookingNodes}
            </ul>
        </>
    
    )
}

export default BookingsList;