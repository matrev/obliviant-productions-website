import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import { Flex } from 'rebass';
import { Nav, NavbarBrand, NavLink } from 'reactstrap';

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
				<NavLink style={{ color: "white" }} variant="nav" href="/about">About</NavLink>
				<NavLink style={{ color: "white" }} variant="nav" href="/episodes">Episodes</NavLink>
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
