import React from 'react';
import formatValue from '../../helpers/formatter';

export default function ReadOnly({ value = '', label, color, id, bar }) {
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
