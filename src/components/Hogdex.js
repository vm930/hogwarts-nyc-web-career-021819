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
				break;
			case 'oil':
				this.setState({
					oil: !this.state.oil
				})
				break;
			default: console.log("clicked")
		}
	}

	hogs = () => this.filterFridge().map((hog) => <WholeHog {...hog} />); //spread out the entire hog obj into components

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		});
	}

	filterFridge = () => {
		let filteredHogs = this.props.hogs.filter((hog) => hog.name.toLowerCase().includes(this.state.search.toLowerCase()))
		if (this.state.oil === true) {filteredHogs = filteredHogs.filter(hog => hog.greased)}
		return filteredHogs.sort(this.whichSort())
	};

	whichSort = () => (this.state.sort === "name") ? this.sortFunc : this.sortFunc2
	sortFunc = (a,b) =>  (a.name>b.name)? 1 : -1
	sortFunc2 = (a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']? 1 : -1)

	goAway = () => {
		console.log("disappearing")
	}

	render(){
		return (
			<div>
				<Buttons handleChange={this.handleChange} handleClick={this.handleClick} />
				<div className="ui three cards">{this.hogs()}</div>
				<button onClick={this.goAway}>Tell pig to go away</button>
			</div>
		)
	}
}

export default Hogdex;
