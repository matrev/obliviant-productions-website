import React, { useState} from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import Contact from './pages/Contact';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Nav, NavbarBrand, NavLink,
		 NavbarToggler, Collapse, NavItem, 
		 UncontrolledDropdown, DropdownToggle, 
		 DropdownItem, DropdownMenu} from 'reactstrap';
import { Stack } from '@fluentui/react';
import EpisodePage from './components/EpisodePage';

function App() {

	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);

	const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' }); 
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });

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
							<UncontrolledDropdown inNavbar>
								<DropdownToggle className='nav-link' nav caret>
									Episodes
								</DropdownToggle>
								<DropdownMenu center="true">
									<NavLink className='nav-link' href='/episodes/all'>
										<DropdownItem>
											All
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/anthony'>
										<DropdownItem>
											Anthony's Picks
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/livia'>
										<DropdownItem>
											Livia's Picks
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/guest'>
										<DropdownItem>
											Guest Appearances
										</DropdownItem>
									</NavLink>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavLink className='nav-link' href='/contact'>Contact</NavLink>
						</Stack>
					</Stack>
				}
				{isTabletOrMobile &&
					<Navbar className="header-style" dark>
						<NavbarBrand href="/" className="mr-auto">
							<img src={require("./assets/logo.png")} style={{width: 100}} alt="Navigation bar brand logo"/>
						</NavbarBrand>
						<NavbarToggler onClick={toggleNavbar} className="mr-2" />
						<Collapse isOpen={!collapsed} navbar>
						<Nav navbar style={{ alignItems: 'center' }}>
							<NavItem>
								<NavLink className='nav-link' href='/'>Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className='nav-link' href="/about">About</NavLink>
							</NavItem>
							<UncontrolledDropdown inNavbar>
								<DropdownToggle className='nav-link' nav caret>
									Episodes
								</DropdownToggle>
								<DropdownMenu center="true">
									<NavLink className='nav-link' href='/episodes/all'>
										<DropdownItem>
											All
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/anthony'>
										<DropdownItem>
											Anthony's Picks
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/livia'>
										<DropdownItem>
											Livia's Picks
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/guest'>
										<DropdownItem>
											Guest Appearances
										</DropdownItem>
									</NavLink>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem>
								<NavLink className='nav-link' href='/contact'>Contact</NavLink>
							</NavItem>
						</Nav>
						</Collapse>
					</Navbar>}

				{(isTabletOrMobileDevice && !isTabletOrMobile) && 
					<Navbar className="header-style" dark>
						<NavbarBrand href="/" className="mr-auto">
							<img src={require("./assets/logo.png")} style={{width: 100}} alt="Navigation bar brand logo"/>
						</NavbarBrand>
						<NavbarToggler onClick={toggleNavbar} className="mr-2" />
						<Collapse isOpen={!collapsed} navbar>
						<Nav navbar style={{ alignItems: 'center' }}>
							<NavItem>
								<NavLink className='nav-link'  href='/'>Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className='nav-link' href="/about">About</NavLink>
							</NavItem>
							<UncontrolledDropdown inNavbar>
								<DropdownToggle className='nav-link' nav caret>
									Episodes
								</DropdownToggle>
								<DropdownMenu center="true">
									<NavLink className='nav-link' href='/episodes/all'>
										<DropdownItem>
											All
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/anthony'>
										<DropdownItem>
											Anthony's Picks
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/livia'>
										<DropdownItem>
											Livia's Picks
										</DropdownItem>
									</NavLink>
									<NavLink className='nav-link' href='/episodes/guest'>
										<DropdownItem>
											Guest Appearances
										</DropdownItem>
									</NavLink>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem>
								<NavLink className='nav-link' href='/contact'>Contact</NavLink>
							</NavItem>
						</Nav>
						</Collapse>
					</Navbar>
				}
				
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route exact path="/episodes/all" render={() => <Episodes />} />
				<Route exact path="/episodes/anthony" render={() => <Episodes isAnthony />}/>
				<Route exact path="/episodes/livia" render={() => <Episodes isLivia />} />
				<Route exact path="/episodes/guest" render={() => <Episodes isGuest />} />
				<Route path={`/episodes/episode/:episodeSlug`} render={() => <EpisodePage />} />
				<Route path="/contact" component={Contact} />
			</BrowserRouter>
		</div>
  );
}

export default App;
