import React, { Component } from 'react';
import HogDeetz from './HogDeetz';

class WholeHog extends Component {
	state = {
		clicked: false
	};

	handleClick = (e) => {
		this.setState({
			clicked: !this.state.clicked
		});
	};

	render() {
		console.log(this.state.clicked);
		return (
			<div className="ui card" onClick={this.handleClick}>
				<div className="content">
					<div className="header">{this.props.name}</div>
				</div>
				<div className="image">
					<img src={'/hog-imgs/' + this.props.name.toLowerCase().replace(/ /g, '_') + '.jpg'} />
				</div>

				{this.state.clicked ? <HogDeetz {...this.props} /> : null}
				<button onClick={this.goAway}>Tell pig to go away</button>
			</div>
		);
	}
}

export default WholeHog;
