import React from "react";
import {
    Text,
    Box
    
} from '@chakra-ui/react';

const ConfirmedBooking = ({bookingDetails}) => {
    console.log(bookingDetails);
    return (
        <Box className="container" mt="60px">
            <Text fontSize="30">Your booking has been confirmed!</Text>
            <Box mt="20px">
                <Text>Date: {bookingDetails.date}</Text>
                <Text>Time: {bookingDetails.time} </Text>
                <Text>Guest number: {bookingDetails.guests}</Text>
                <Text>Occasion: {bookingDetails.occasion}</Text>
            </Box>
        </Box>                                                                               
    )
};

export default ConfirmedBooking;