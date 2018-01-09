import React from 'react'

const Counter = (props) => {
	return (
		<div onClick={props.handleClick}>
			<span>{props.counter}</span>
		</div>
	)
}

export default Counter