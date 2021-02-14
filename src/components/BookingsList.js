import React from "react";
import Booking from "./Booking";

const BookingsList = ({bookings}) => {

    if (bookings.length === 0){
        return <h3>Loading...</h3>;
    }

    const bookingNodes = bookings.map((booking, index) => {
    
        return ( 

        <li key={index} className="component-item">
        
        <div className="bookingsComponent">
            <Booking booking={booking} />
        </div>

        </li>

        )
    })

        return (
    
            <ul className="component-list">
                {bookingNodes}
            </ul>

        )

}

export default BookingsList;