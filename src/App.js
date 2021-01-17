import React, { useState } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import Contact from './pages/Contact';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Nav, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { Stack } from '@fluentui/react';

function App() {

	const [collapsed, setCollapsed] = useState(true);
  	const toggleNavbar = () => setCollapsed(!collapsed);

	const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' }); 
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' })

	return (
		<div className="App">
			<BrowserRouter basename={"/"}>
				{(isDesktopOrLaptop && !isTabletOrMobile) &&
					<Stack className='header-style' horizontal horizontalAlign='center' tokens={{childrenGap: 0}} >
						
						<Stack horizontal verticalAlign='center' horizontalAlign='end'>
							<NavLink className='nav-link'  href='/'>Home</NavLink>
							<NavLink className='nav-link' href="/about">About</NavLink>
						</Stack>

						<Stack className='logo' horizontalAlign='center' verticalAlign='center'>
							<a href="/">
								<img src={require("./assets/logo.png")} style={{width: 256}} alt="Navigation bar brand logo"/>
							</a>	
						</Stack>	

						<Stack horizontal verticalAlign='center' horizontalAlign='start'>
							<NavLink className='nav-link' href="/episodes">Episodes</NavLink>
							<NavLink className='nav-link' href='/contact'>Contact</NavLink>
						</Stack>
					</Stack>
				}
				{(isTabletOrMobile) &&
				
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
							<Stack horizontal verticalAlign='center' horizontalAlign='space-evenly' tokens={{childrenGap: 1}}>
								<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' rel="noopener noreferrer" style={{paddingRight: '5px'}}>
									<img src={require("./assets/spotifyIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://twitter.com/brosisshow' target='_blank' rel="noopener noreferrer">
									<img src={require("./assets/twitterIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://instagram.com/brothersistershow' target='_blank' rel="noopener noreferrer">
									<img src={require("./assets/instaIcon.png")} style={{width: 40}} alt="Spotify Badge" />
								</a>

								<a href='https://discord.gg/QY2BMPeE' target='_blank' rel="noopener noreferrer">
									<img src={require("./assets/discordIcon")} style={{width: 40}} alt="Spotify Badge" />
								</a>
							</Stack>
						</Nav>
						</Collapse>
					</Navbar>}

				{(isTabletOrMobileDevice && !isTabletOrMobile)&& 
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
							<Stack horizontal verticalAlign='center' horizontalAlign='space-evenly' tokens={{childrenGap: 1}}>
								<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' rel="noopener noreferrer" style={{paddingRight: '5px'}}>
									<img src={require("./assets/spotifyIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://twitter.com/brosisshow' target='_blank' rel="noopener noreferrer">
									<img src={require("./assets/twitterIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://instagram.com/brothersistershow' target='_blank' rel="noopener noreferrer">
									<img src={require("./assets/instaIcon.png")} style={{width: 40}} alt="Spotify Badge" />
								</a>

								<a href='https://discord.gg/QY2BMPeE' target='_blank'rel="noopener noreferrer" >
									<img src={require("./assets/discordIcon")} style={{width: 40}} alt="Spotify Badge" />
								</a>
							</Stack>
						</Nav>
						</Collapse>
					</Navbar>
				}
				<hr className='nav-bottom-border' />
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/episodes" component={Episodes} />
				<Route path="/contact" component={Contact} />
			</BrowserRouter>
		</div>
  );
}

export default App;
