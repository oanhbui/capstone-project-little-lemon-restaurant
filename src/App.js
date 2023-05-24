import React, { useReducer, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';
import { updateTimeReducer } from './reducers/timeslots';
import { ACTIONS } from './constants';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimeReducer, []);
  //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  


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
