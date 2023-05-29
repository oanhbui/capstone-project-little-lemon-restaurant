import React from "react";

const ConfirmedBooking = ({bookingDetails}) => {
    console.log(bookingDetails);
    return (
        <div>
            <h1>Your booking has been confirmed!</h1>
            <div>
                <p>Date: {bookingDetails.date}</p>
                <p>Time: {bookingDetails.time} </p>
                <p>Guest number: {bookingDetails.guests}</p>
                <p>Occasion: {bookingDetails.occasion}</p>
            </div>
        </div>                                                                               
    )
};

export default ConfirmedBooking;