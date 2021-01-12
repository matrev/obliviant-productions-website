import React, { useState } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
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
					<div className='header-style' alignItems='center'>
						<div className='navbarItems'>
							<NavLink style={{ color: "white", fontSize: '36px', width: '5px' }} variant="nav" href="/about">About</NavLink>
							<NavLink style={{ color: "white", fontSize: '36px', width: '5px' }} variant="nav" href="/episodes">Episodes</NavLink> 
						</div>
						<a href="/">
							<img src={require("./assets/logo.png")} style={{width: 256}} alt="Navigation bar brand logo"/>
						</a>
						
						<div>
							<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank'>
								<img src={require("./assets/spotifyIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>
							<a href='https://twitter.com/brosisshow' target='_blank'>
								<img src={require("./assets/twitterIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>
						</div>
					</div>
				}

				{isTabletOrMobileDevice && 
					<Navbar className="header-style" dark>
						<NavbarBrand href="/" className="mr-auto">
							<img src={require("./assets/logo.png")} style={{width: 100}} alt="Navigation bar brand logo"/>
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
				<br/>
				<div className='back'>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/episodes" component={Episodes} />
				</div>
			</BrowserRouter>
		</div>
  );
}

export default App;
