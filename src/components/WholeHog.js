import React, { Component } from 'react';

class WholeHog extends Component {
	// hogImgConvert = () => {
  //       const imgUrl = ;
	// 	return imgUrl;
	// };

	render() {
		return (
			// <div>
			// 	<h3>{this.props.name}</h3>
			// 	<img src= />
			// </div>
			<div className="ui card">
  <div className="content">
    <div className="right floated meta">14h</div>
  </div>
  <div className="image">
    <img src={'/hog-imgs/' + this.props.name.toLowerCase().replace(/ /g, '_') + '.jpg'}/>
  </div>
  <div className="content">
    <span className="right floated">
      <i className="heart outline like icon"></i>
      17 likes
    </span>
    <i className="comment icon"></i>
    3 comments
  </div>
  <div className="extra content">
    <div className="ui large transparent left icon input">
      <i className="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..."/>
    </div>
  </div>
</div>

		);
	}
}

export default WholeHog;
