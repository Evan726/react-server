import React from 'react';

import {
	connect
} from "react-redux";

import {
	fetchFet
} from "./../actions/action"

import Log from '../components/Log';
class App extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(fetchFet())
	}

	render() {
		const {
			a,
			content
		} = this.props;
		console.log(a)
		return (
			<div>
				
				<Log a={a}></Log>
				<ul>
					<li>id-------:{content.id}</li>
					<li>versionCode-------:{content.versionCode}</li>
					<li>updataStatus-------:{content.updataStatus}</li>
					<li>downloadUrl-------:{content.downloadUrl}</li>
					<li>content-------:{content.content}</li>
					<li>createTime-------:{content.createTime}</li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {

	const {
		isFetching,
		content
	} = state.fet || {
		isFetching: false,
		content: {}
	}
	const {
		a
	} = state.urlObj
	return {
		a,
		isFetching,
		content
	}
}

export default connect(mapStateToProps)(App)