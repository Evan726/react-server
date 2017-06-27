import React from 'react';
import {
	Link
} from 'react-router';
export default class Show extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>这是详情--{this.props.params.id}---------<Link to={"/"}>跳转首页</Link></div>
		);
	}
}