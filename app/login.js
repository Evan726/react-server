import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>登录</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)