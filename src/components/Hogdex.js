import React, { Component } from 'react';
import WholeHog from './WholeHog';

class Hogdex extends Component {
	state = {
		hogs: this.props.hogs
	};

	hog = () => this.props.hogs.map((hog) => <WholeHog {...hog} />); //spread out the entire hog obj into components

	render() {
		return <div>{this.hog()}</div>;
	}
}

export default Hogdex;
