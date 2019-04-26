import React, { Component } from 'react';

class Buttons extends Component {
	render() {
		return (
			<div>
				<form>
					<input onChange={this.props.handleChange} />
				</form>

				<button name="name" onClick={this.props.handleClick}>
					Sort by Name
				</button>
				<button name="weight" onClick={this.props.handleClick}>
					Sort by Weight
				</button>
				<button name="oil" onClick={this.props.handleClick}>
					Filter by Oil
				</button>
			</div>
		);
	}
}

export default Buttons;
