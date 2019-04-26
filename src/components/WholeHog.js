import React, { Component } from 'react';

class WholeHog extends Component {
	hogImgConvert = () => {
        const imgUrl = '../hog-imgs/' + this.props.name.replace(/ /g, '_') + '.jpg';
        import image from imgUrl
		return image;
	};

	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<img src={require(this.hogImgConvert())} />
			</div>
		);
	}
}

export default WholeHog;
