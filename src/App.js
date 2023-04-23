import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';
// import firebase from 'firebase';

function App() {

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });

	return (
		<div className="App">
			<div className="home-header">
			</div>
			<br></br>
			<br></br>
			<div style={{margin: isTabletOrMobile ? 25 : 0}}>
				<p className="home-text">I'm in the middle of reworking this site. Please be patient with me. </p>
				<p className="home-text">-Anthony :)</p>
			</div>
			<br></br>
			<br></br>
		</div>
  );
}

export default App;
