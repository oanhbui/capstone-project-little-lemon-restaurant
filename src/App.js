import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
