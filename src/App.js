import * as React from 'react';
import Counter from './Counter';


export default class App extends React.Component {
	render() {
		return (
			<div>
				<Counter increment={1} />
				<Counter increment={5} />
			</div>
		);
	}
}
