import React from 'react';

const Bookings = ({booking}) => {

  if (!booking){
    return <p>Loading...</p>
  }

  return (
    <>
    {booking.course} {booking.customer}

    <p>Course {booking.course}</p>
    <p>Ship/Customer: {booking.customer}</p>
    </>
    
  )
}

export default Bookings;