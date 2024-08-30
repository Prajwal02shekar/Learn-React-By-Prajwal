import React, { PureComponent } from 'react'

export default class CountWithCBC extends PureComponent {

	render() {
		let { count, Increment } = this.props.count;

		return (

			<div>
				{console.log("Iam class based child component")}
					<h1>Iam a class based child based component <strong style={{ color: "blue" }}>{count}</strong></h1>
					<button onClick={Increment}>Increment from PureComponent Class Based</button>
		</div>
	)
	}
}
