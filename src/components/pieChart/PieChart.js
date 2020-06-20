import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
export default class PieChart extends Component {
  render() {
    const {
      bar1,
      bar2,
      bar3,
      innsDiscountColor,
      irpfDiscountColor,
      netColor,
    } = this.props;

    return (
      <div>
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="PieChart"
          data={[
            ['Title', 'Porcentage'],
            ['Net Salary', bar3],
            ['INSS Discount', bar1],
            ['IRPF Discount', bar2],
          ]}
          options={{
            pieSliceText: 'none',
            pieStartAngle: 30,
            is3D: true,
            colors: [netColor, innsDiscountColor, irpfDiscountColor],
          }}
        />
      </div>
    );
  }
}
