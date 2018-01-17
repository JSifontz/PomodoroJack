import React from 'react'


const CounterLayout = (props) => {

	return (
		<div>
			<p>{props.count}</p>
			<button onClick={props.handleStartClick}>Start</button>
			<button onClick={props.handleStopClick}>Stop</button>
			<button onClick={props.handleResetClick}>Reset</button>
		</div>
	)
}

export default CounterLayout