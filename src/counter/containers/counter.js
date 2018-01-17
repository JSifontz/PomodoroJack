import React, { Component } from 'react'
import ReactInterval from 'react-interval'
import CounterLayout from '@/counter/components/counter-layout'

class Counter extends Component {
	state = {
		enabled: false,
		timeout: 1000,
		count: 10,
	}
	
	count = () => {
		this.setState({
			counterShown: this.state.counterShown - 1
		})
	}

	handleStartClick = () => {
		this.setState({
			enabled: true
		})
	}

	handleStopClick = () => {
		this.setState({
			enabled: false
		})
	}

	interval = () => {
		this.setState({
			count: this.state.count - 1
		})
	}

	handleResetClick = () => {
		this.setState({
			count: 10
		})
	}

	render(){

		const { timeout, enabled, count } = this.state;

		return(
			<div>
				<ReactInterval {...{ timeout, enabled }}
					callback={this.interval} 
				/>

				<CounterLayout
					count = {this.state.count}
					handleStartClick={this.handleStartClick}
					handleStopClick={this.handleStopClick}
					handleResetClick={this.handleResetClick}
				/>
			</div>
		)
	}
}

export default Counter