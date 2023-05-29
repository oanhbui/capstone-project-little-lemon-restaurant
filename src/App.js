import React, { useReducer, useState } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';
import { updateTimeReducer } from './reducers/timeslots';
import ConfirmedBooking from './ConfirmedBooking';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimeReducer, []);
  //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  const [bookingDetails, setBookingDetails] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header availableTimes={availableTimes} dispatch={dispatch} setBookingDetails={setBookingDetails}/>
        <Main />
      </>
    },
    {
      path: "/confirm-booking",
      element: <ConfirmedBooking bookingDetails={bookingDetails} />
    }
  ]);


  return (
    <ChakraProvider>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
