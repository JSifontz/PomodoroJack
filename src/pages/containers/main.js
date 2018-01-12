import React, { Component } from 'react'
import Layout from '@/pages/components/layout'
import Counter from '@/counter/components/counter'
import { AppContainer } from 'react-hot-loader'

class Main extends Component {

  state = {
    counter: 30
  }

  handleClick = () => {
    console.log('IT WORK!!!!')
  }

  render() {
    return (
      <AppContainer>
        <Layout>
          <Counter 
            counter={this.state.counter}
            handleClick = {this.handleClick}
          />
        </Layout>
      </AppContainer>
    );
  }
}

export default Main