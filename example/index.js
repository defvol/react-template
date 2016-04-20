import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TheComponent from '../index'

class App extends Component {

  render() {
    return <TheComponent text='A Component' />
  }

}

ReactDOM.render(<App />, document.querySelector('#content'))
