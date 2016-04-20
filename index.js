import React, { Component, PropTypes } from 'react'

class TheComponent extends Component {

  render() {
    const { text } = this.props
    return <p>{text}</p>
  }

}

TheComponent.propTypes = {
  text: PropTypes.string.isRequired
}

export default TheComponent
