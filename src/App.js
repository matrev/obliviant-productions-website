import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import { Flex } from 'rebass';
import { Nav, NavbarBrand } from 'reactstrap';

function App() {
  return (

    <div className="App">
		<BrowserRouter basename={"/"}>
		<Nav className="header-style">
			<Flex
				px={2}
  				color='white'
 				// bg='black'
  				alignItems='center'>
				<NavbarBrand href={"/"} className="mr-auto" >
					<img src={require("./assets/logo.PNG")} style={{width: 50}} alt="Navigation bar brand logo"/>
				</NavbarBrand>
				<Link variant="nav" to="/about">About</Link>
				<Link variant="nav" to="/episodes">Episodes</Link>
			</Flex>

      	</Nav>
      
      
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
