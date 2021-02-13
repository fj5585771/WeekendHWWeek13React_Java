
import app from "./App.js";

const BookingsSystem = ({bookings}) => {

    return (

        <>
            <h1>Bookings information</h1>
            
             <div>
                <h3>booking details here</h3>
                <p>{bookings}</p>
                    <p>date</p>
                    <p> course name </p>
                    <p> town where course is held </p>
                    <p> course rating </p>
                    <p>List of other bookings made on course i.e. drop down of other customers with THEIR bookings?</p>
                    <p> customer name</p>
                    <p> customer town where they're from</p>
                    <p> customer age</p>
                    <p> List of their bookings?</p>
                    
            </div>
        </>


    
    );
}

export default BookingsSystem;