import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import { TopNav } from './components/TopNav';
// import firebase from 'firebase';

function App() {
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
