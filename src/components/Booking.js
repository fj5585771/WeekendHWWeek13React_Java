import React from "react";

const Booking = ({booking}) => {

    return (
    
    <div>
    <p>course name:{booking.course.name}</p>
    <p>situated: {booking.course.town}</p>
    <p>rating: {booking.course.rating}</p>
    <span id="customerDeets">Customer details:</span>
    <p>name:{booking.customer.name}</p>
    
    </div>
    
    )


}
export default Booking;