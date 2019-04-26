import React, { Component } from 'react';
import WholeHog from './WholeHog';

class Hogdex extends Component {
	state = {
		hogs: this.props.hogs
	};
	render() {
		return (
			<div>
				<WholeHog />
			</div>
		);
	}
}

export default Hogdex;
