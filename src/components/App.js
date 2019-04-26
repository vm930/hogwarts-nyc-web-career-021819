import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import Hogdex from './Hogdex';

class App extends Component {
	render() {
		// console.log(hogs);
		return (
			<div className="App">
				<Nav />
				<Hogdex hogs={hogs} />
			</div>
		);
	}
}

export default App;
