import React, { Component } from 'react'
import ReactInterval from 'react-interval'
import CounterLayout from '@/counter/components/counter-layout'
import counts from '@/counter/contador'

class Counter extends Component {
	state = {
		enabled: false,
		timeout: 1000,
		count: 1500,
		counterShown: '25:00'
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

	handleResetClick = () => {
		this.setState({
			count: 1500
		})
	}

	interval = () => {
		let counterToShow = this.state.count - 1 
		this.setState({
			count: this.state.count - 1,
			counterShown: counts(counterToShow)
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
					countShow = {this.state.counterShown}
					handleStartClick={this.handleStartClick}
					handleStopClick={this.handleStopClick}
					handleResetClick={this.handleResetClick}
				/>
			</div>
		)
	}
}

export default Counter