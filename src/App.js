import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import { Flex, Link, Box, Image } from 'rebass';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Flex
        p={3}
        color="white"
        bg="primary"
        alignItems="center"
      >
        <Link variant="nav" href="">Home</Link>
        <Box mx="auto" />
        <Link variant="nav" href="/About">About</Link>
        <Link variant="nav" href="/Episodes">Episodes</Link>
      </Flex>
        {/* <Link to="/Blog">Blog</Link> */}

        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Episodes" component={Episodes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
