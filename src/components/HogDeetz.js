import React, { Component } from 'react';

class HogDeetz extends Component {
	render() {
		console.log(this.props);
		return (<div>
			<div className="content">
					<span className="left floated">
						How greasy is this boi: {this.props.greased ? "Severus Snape" : "Seagram's Extra Dry"}
					</span>
					<span className="left floated">
						Specialty: {this.props.specialty}
					</span>
					</div>
					<br/>
					<div className="extra content">
					<span className="right floated">
						<i className="heart outline like icon"></i>
						Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
					</span>
					<i className="comment icon"></i>
					3 comments
					</div>
				</div>)
			}
}

export default HogDeetz;
