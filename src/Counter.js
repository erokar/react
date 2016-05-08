import * as React  from 'react';

export default class Counter extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState({
			count: this.state.count + this.props.increment
		})
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<h1>
					Increment: {this.props.increment} Counter: {this.state.count}
				</h1>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}
}
