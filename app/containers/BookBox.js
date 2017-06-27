import React from 'react';

import {
	connect
} from "react-redux";
import Book from '../components/Book';
class BookBox extends React.Component {
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
			<Book a={a}></Book>
		);
	}
}

function mapStateToProps(state) {

	const {
		a
	} = state.index;
	return {
		a
	}
}

export default connect(mapStateToProps)(BookBox)