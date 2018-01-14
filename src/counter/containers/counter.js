import React, { Component } from 'react'
import CounterLayout from '@/counter/components/counter-layout'
import Count from '@/counter/components/count'

class Counter extends Component {
	state = {
		counter: 5000,
		counterShown: 5,
	}
	
	count = () => {
		this.setState({
			counterShown: this.state.counterShown - 1
		})
	}

	handleStartClick = () => {
		setInterval( this.count, 1000)
	}

	handleStopClick = () => {
		console.log(this.handleStartClick)
		clearInterval(this.handleStartClick)
	}

	render(){
		// Count(this.state.counter, this.state.counterShown)

		return(
			<CounterLayout
				counter = {this.state.counter}
				counterShown = {this.state.counterShown}
				handleStartClick={this.handleStartClick}
				handleStopClick={this.handleStopClick}
			/>
		)
	}
}

export default Counter