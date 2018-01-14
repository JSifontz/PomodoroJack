import React, { Component } from 'react'
import Layout from '@/pages/components/layout'
import Counter from '@/counter/containers/counter'

class Main extends Component {

  render() {
    return (
        <Layout>
          <Counter />
        </Layout>
    );
  }
}

export default Main