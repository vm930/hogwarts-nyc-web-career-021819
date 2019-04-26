import React, { Component } from 'react';
import WholeHog from './WholeHog';
import Buttons from './Buttons';

class Hogdex extends Component {
	state = {
		hogs: this.props.hogs,
		search: '',
		sort: "name",
		oil: false
	};

	handleClick = (event) =>{
		switch (event.target.name) {
			case 'name':
				this.setState({
					sort: "name"
				})
				break;
			case 'weight':
				this.setState({
					sort: 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
				})
			case 'oil':
				this.setState({
					oil: true
				})
				
				break;
	}

	hog = () => this.filterFridge().map((hog) => <WholeHog {...hog} />); //spread out the entire hog obj into components

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		});
	};

	filterFridge = () => {
		return this.props.hogs.filter((hog) => hog.name.toLowerCase().includes(this.state.search.toLowerCase())).sort(function(a,b){
			return (a[this.state.sort] > b[this.state.sort]? 1: -1)
		});
	};

	

	render() {
		return (
			<div>
				<Buttons handleChange={this.handleChange} />
				<div className="ui three cards">{this.hog()}</div>
			</div>
		);
	}
}

export default Hogdex;
