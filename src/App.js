import React, { useState } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Nav, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { Stack, StackItem } from '@fluentui/react';

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
						
						<Stack horizontal  verticalAlign='center' horizontalAlign='end'>
							<NavLink style={{ color: "white", fontSize: '42px' }} variant="nav" href="/about">About</NavLink>
							<NavLink style={{ color: "white", fontSize: '42px'}} variant="nav" href="/episodes">Episodes</NavLink> 
						</Stack>

						<StackItem styles={{ root: { padding: '0px 0px 0px 0px'}}}>
							<NavbarBrand href="/" className="logo">
								<img src={require("./assets/logo.png")} style={{width: 256}} alt="Navigation bar brand logo"/>
							</NavbarBrand>	
						</StackItem>	

						<Stack horizontal verticalAlign='center' horizontalAlign='space-evenly' tokens={{childrenGap: 10}}>
							<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' style={{paddingRight: '5px'}}>
								<img src={require("./assets/spotifyIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>

							<a href='https://twitter.com/brosisshow' target='_blank'>
								<img src={require("./assets/twitterIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>

							<a href='https://instagram.com/brothersistershow' target='_blank'>
								<img src={require("./assets/instaIcon.png")} style={{width: 80}} alt="Spotify Badge" />
							</a>

							<a href='https://discord.gg/QY2BMPeE' target='_blank'>
								<img src={require("./assets/discordIcon")} style={{width: 80}} alt="Spotify Badge" />
							</a>
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
								<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' style={{paddingRight: '5px'}}>
									<img src={require("./assets/spotifyIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://twitter.com/brosisshow' target='_blank'>
									<img src={require("./assets/twitterIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://instagram.com/brothersistershow' target='_blank'>
									<img src={require("./assets/instaIcon.png")} style={{width: 40}} alt="Spotify Badge" />
								</a>

								<a href='https://discord.gg/QY2BMPeE' target='_blank'>
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
								<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' style={{paddingRight: '5px'}}>
									<img src={require("./assets/spotifyIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://twitter.com/brosisshow' target='_blank'>
									<img src={require("./assets/twitterIcon.png")} style={{width: 32}} alt="Spotify Badge" />
								</a>

								<a href='https://instagram.com/brothersistershow' target='_blank'>
									<img src={require("./assets/instaIcon.png")} style={{width: 40}} alt="Spotify Badge" />
								</a>

								<a href='https://discord.gg/QY2BMPeE' target='_blank'>
									<img src={require("./assets/discordIcon")} style={{width: 40}} alt="Spotify Badge" />
								</a>
							</Stack>
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
