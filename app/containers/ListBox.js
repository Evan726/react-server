import React from 'react';

import {
	connect
} from "react-redux";

import List from '../components/List';
class ListBox extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			a
		} = this.props;
		return (
			<div>
				<List a={a}></List>
				{this.props.children}
			</div>

		);
	}
}

function mapStateToProps(state) {

	const {
		a
	} = state.Activity;
	return {
		a
	}
}

export default connect(mapStateToProps)(ListBox)