import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import { Flex, Box, Image } from 'rebass';
import { Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

function App() {
  return (

    <div className="App">
		<Nav className="header-style">
			<Flex
				px={2}
  				color='white'
 				// bg='black'
  				alignItems='center'>
				<NavbarBrand href={"/"} className="mr-auto" >
					<img src={require("./assets/logo.PNG")} style={{width: 50}} alt="Navigation bar brand logo"/>
				</NavbarBrand>
				<NavItem>
					<NavLink variant="nav" href="/about">About</NavLink>
				</NavItem>
				<NavItem>
					<NavLink variant="nav" href="/episodes">Episodes</NavLink>
				</NavItem>
			</Flex>

      	</Nav>
      <BrowserRouter>
      
        {/* <Box mx="auto" /> */}
        
      	
        {/* <Link to="/Blog">Blog</Link> */}

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/episodes" component={Episodes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
