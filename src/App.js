import React, { useState} from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import { useMediaQuery } from 'react-responsive';
import { TopNav } from './components/TopNav';
// import firebase from 'firebase';

function App() {

	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);

	const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' }); 
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });

	return (
		<div className="App">
			<BrowserRouter basename={"/"}>
				<TopNav />
				
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/videos" component={Videos} />
				<Route path="/contact" component={Contact} />
			</BrowserRouter>
		</div>
  );
}

export default App;
