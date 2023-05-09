import React, {useState, useReducer} from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';
import {ACTIONS} from './constants';

function App() {
  //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  const initialTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const updateTimeReducer = (state, action) => {
    if (action.type === ACTIONS.BOOKING_TIME) {
      const selected = action.time;
      return state.filter(time => time !== selected);
    }
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimeReducer, initialTimes());

  return (
    <ChakraProvider>
      <Nav />
      <Header availableTimes={availableTimes} dispatch={dispatch}/>
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
