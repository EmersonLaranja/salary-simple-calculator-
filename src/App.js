import React, { Component } from 'react';
import Header from './components/header/Header';
import { calculateSalaryFrom } from './helpers/salary';
import GrossSalary from './components/inputs/GrossSalary';
import ReadOnly from './components/inputs/ReadOnly';
import PieChart from './components/pieChart/PieChart';
import Bar from './components/bar/Bar';
import css from './components/bar/bar.module.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      grossSalary: 1000,
      results: {},
    };
  }

  componentDidMount() {
    const { grossSalary } = this.state;

    this.setState({
      results: calculateSalaryFrom(grossSalary),
    });
  }

  handleChangeGrossSalary = (grossSalary) => {
    this.setState({
      grossSalary,
      results: calculateSalaryFrom(grossSalary),
    });
  };

  // readResults = (value, porcentage) => {
  //   return porcentage >= 0.01
  //     ? `${formatMoney(value)} (${formatPercentage(porcentage)})`
  //     : formatMoney(value);
  // };

  render() {
    const {
      grossSalary,
      results: { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary },
    } = this.state;

    const bar1 = (discountINSS / baseINSS) * 100;
    const bar2 = (discountIRPF / baseINSS) * 100;
    const bar3 = 100 - (bar1 + bar2);

    const innsDiscountColor = '#9400D3';
    const irpfDiscountColor = '#3082B3';
    const netColor = '#33BD7F';

    return (
      <div className="container ">
        <Header text="React Salary" />

        <div className="row">
          <div className="col s6 ">
            <GrossSalary
              value={grossSalary}
              onChangeGrossSalary={this.handleChangeGrossSalary}
            />

            <ReadOnly id="1" value={baseINSS} label={'INSS Base'} />

            <ReadOnly
              id="2"
              value={discountINSS}
              bar={bar1}
              label={'INSS Discount'}
              color={innsDiscountColor}
            />

            <ReadOnly id="3" value={baseIRPF} label={'IRPF Base'} />

            <ReadOnly
              id="4"
              value={discountIRPF}
              bar={bar2}
              label={'IRPF Discount'}
              color={irpfDiscountColor}
            />

            <ReadOnly
              id="5"
              value={netSalary}
              bar={bar3}
              label={'Net Salary'}
              color={netColor}
            />
          </div>

          <div className="col s6 ">
            <PieChart
              bar1={bar1}
              innsDiscountColor={innsDiscountColor}
              bar2={bar2}
              irpfDiscountColor={irpfDiscountColor}
              bar3={bar3}
              netColor={netColor}
            />
          </div>
        </div>

        <div className={css.displayBar}>
          <Bar
            value={bar1}
            color={innsDiscountColor}
            border="8px 0px 0px 8px"
          />
          <Bar value={bar2} color={irpfDiscountColor} />
          <Bar value={bar3} color={netColor} border="0 8px 8px 0" />
        </div>
      </div>
    );
  }
}
