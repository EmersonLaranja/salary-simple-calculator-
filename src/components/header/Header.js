import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="center-align">{text}</h1>;
  }
}
