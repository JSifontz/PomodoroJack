import React from 'react'


const CounterLayout = (props) => {

	return (
		<div>
			<span>{props.counterShown}</span>
			<button onClick={props.handleStartClick}>Start</button>
			<button onClick={props.handleStopClick}>Cancel</button>
		</div>
	)
}

export default CounterLayout