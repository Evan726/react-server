import React from 'react';
import {
	Link
} from 'react-router';
export default class Log extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div ><p>asdfasdfasdf</p><p>1</p>组件LOG---reduces数据为:{this.props.a}<Link to={"/book"}>跳转Bool页</Link></div>
		);
	}
}