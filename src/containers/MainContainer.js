import React, { useState, useEffect } from "react";
import {Route} from "react-router-dom";
import BookingsList from "../components/BookingsList";

const MainContainer = () => {

    const [bookings, setBookings] = useState([])
    // const [customers, setCustomers] = useState([])
    // const [courses, setCourses] = useState([])

    const getBookings = () => {

        fetch('http://localhost:8080/bookings')
        .then((res) => res.json())
        .then(data => setBookings(data))
    } 

    // const getCustomers = () => {

    //     // wanna access the info/data for bookings. need to be done with fetch
    //     const url = ('http://localhost:8080/customers')
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setCustomers(data))
    //     // and render it on main page MAinContainer component
    // } 

    // const getCourses = () => {

    //     // wanna access the info/data for bookings. need to be done with fetch
    //     fetch('http://localhost:8080/courses')
    //     .then(res => res.json())
    //     .then(data => setCourses(data))
    //     // and render it on main page MAinContainer component
    // } 

    useEffect(()=>{
        getBookings()
       
    }, [])

    return(
        <>
        <Route render={() => { 
            return <BookingsList bookings={bookings}/>}} />
    
        </>
    )

}

export default MainContainer;