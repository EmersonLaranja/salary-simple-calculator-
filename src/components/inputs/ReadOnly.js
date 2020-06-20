import React, { Component } from 'react';
import formatValue from '../../helpers/formatter';

export default class ReadOnly extends Component {
  render() {
    const { value = '', label, color, id, bar } = this.props;

    return (
      <div className="col s6">
        <label className="active" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type="text"
          value={formatValue(value, bar)}
          readOnly
          style={{ fontWeight: 'bold', color }}
        />
      </div>
    );
  }
}
