import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleOnClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  render() {
    return (
      <button onClick={this.handleOnClick}>Coordinates</button>
    )
  }
}
