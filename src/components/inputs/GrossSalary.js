import React, { Component } from 'react';

export default class GrossSalary extends Component {
  handleChange = (event) => {
    const newValue = event.target.value;
    this.props.onChangeGrossSalary(newValue);
  };

  render() {
    const { value } = this.props;
    return (
      <div className=" col s12">
        <label className="active" htmlFor="fullSalary">
          Gross Salary
        </label>

        <input
          type="number"
          step={100}
          value={value}
          onChange={this.handleChange}
          min={0}
        />
      </div>
    );
  }
}
