import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import { Flex } from 'rebass';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Nav, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem} from 'reactstrap';

function App() {

	const [collapsed, setCollapsed] = useState(true);
  	const toggleNavbar = () => setCollapsed(!collapsed);

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-device-width: 1224px)'
	});

	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1224px)'
	});

	return (
		<div className="App">
			<BrowserRouter basename={"/"}>
				{isDesktopOrLaptop && 
					<Nav className="header-style">
						<Flex
							px={2}
							color='white'
							// bg='black'
							alignItems='center'>
							<NavbarBrand href="/" className="mr-auto" >
								<img src={require("./assets/logo.PNG")} style={{width: 50}} alt="Navigation bar brand logo"/>
							</NavbarBrand>
							<NavLink style={{ color: "white" }} variant="nav" href="/about">About</NavLink>
							<NavLink style={{ color: "white" }} variant="nav" href="/episodes">Episodes</NavLink>
						</Flex>
					</Nav>
				}

				{isTabletOrMobileDevice && 
					<Navbar className="header-style" dark>
						<NavbarBrand href="/" className="mr-auto">
							<img src={require("./assets/logo.PNG")} style={{width: 50}} alt="Navigation bar brand logo"/>
						</NavbarBrand>
						<NavbarToggler onClick={toggleNavbar} className="mr-2" />
						<Collapse isOpen={!collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink style={{ color: "white" }} variant="nav" href="/about">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink style={{ color: "white" }} variant="nav" href="/episodes">Episodes</NavLink>
							</NavItem>
						</Nav>
						</Collapse>
					</Navbar>
				}

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/episodes" component={Episodes} />
			</BrowserRouter>
		</div>
  );
}

export default App;
