import React from 'react';
import {
	Link
} from 'react-router';
export default class List extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>组件List---reduces数据为:{this.props.a}<Link to={"/"}>跳转首页</Link><Link to={"/list/show"}>跳转详情页</Link></div>
		);
	}
}