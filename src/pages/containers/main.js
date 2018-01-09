import React, { Component } from 'react'
import Layout from '@/pages/components/layout'
import Counter from '@/counter/components/counter'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 30};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('esto está ma')
  }

  render() {
    return (
      <Layout>
        <Counter 
          counter={this.state.counter}
          handleClick = {this.handleClick}
        />
      </Layout>
    );
  }
}

export default Main