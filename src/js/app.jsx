import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '',
      calculate: 0

    };
    this.balance = this.balance.bind(this);
    this.rate = this.rate.bind(this);
    this.term = this.term.bind(this);
    this.calculate = this.calculate.bind(this);

  };

  balance(e) {
    this.setState({ balance: e.target.value });
  }

  rate(e) {
    this.setState({ rate: e.target.value });
  }

  term(e) {
    this.setState({ term: e.target.value });
  }

  calculate() {
    const b = this.state.balance;
    const r = this.state.rate / 100 / 12;
    const t = this.state.term * 12;
    let payment = b * ((r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1));
    payment = payment.toFixed(2);
    this.setState({ calculate: '$' + payment + ' is what you pay a month.'});
  }

  render() {
    return (
      <div className='container'>
        <h1>Mortgage Calculator</h1> Loan Balance
        <input
          name='balance'
          value={this.state.balance}
          type='number'
          onChange={this.balance}
        />
        Interest Rate
        <input
          name='rate'
          value={this.state.rate}
          type='number'
          step='0.01'
          onChange={this.rate}
        />
        <select name='term' onChange={this.term}>
          <option value='15'> 15 </option>
          <option value='30'> 30 </option>
        </select>
        <button name='submit' onClick={this.calculate}>Submit</button>
        <div className='col-h1' id='output'>{this.state.calculate}</div>
      </div>
    );
  }
}
