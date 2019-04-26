import React, { Component } from 'react';
import hogDeetz from './HogDeetz';

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
		// console.log(this.state.clicked);
		return (
			<div className="ui card" onClick={this.handleClick}>
				<div className="content">
					<div className="header">{this.props.name}</div>
				</div>
				<div className="image">
					<img src={'/hog-imgs/' + this.props.name.toLowerCase().replace(/ /g, '_') + '.jpg'} />
				</div>

				{this.state.clicked ? <hogDeetz {...this.props.hog} /> : null}

				{/* <div className="content">
					<span className="right floated">
						<i className="heart outline like icon" />
						17 likes
					</span>
					<i className="comment icon" />
					3 comments
				</div> */}
				{/* <div className="extra content">
					<div className="ui large transparent left icon input">
						<i className="heart outline icon" />
						<input type="text" placeholder="Add Comment..." />
					</div> */}
			</div>
		);
	}
}

export default WholeHog;
