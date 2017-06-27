import React from 'react';
import {
	Link
} from 'react-router';

export default class Book extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			组件BooK---reduces数据为:{this.props.a}
			<Link to={"/list"}>跳转list页</Link>
		</div>
		);
	}
}