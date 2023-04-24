// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    money: 2000,
  }

  stateChange = value => {
    this.setState(prevState => ({
      money: prevState.money - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <div className="heading-container">
            <div className="para-div">
              <p className="s">S</p>
            </div>
            <p className="name-para">Sarah Williams</p>
          </div>
          <div className="money-container">
            <p className="balance-name">Your Balance</p>
            <div className="balance-holder">
              <p className="amount">{money}</p>
            </div>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>

          <ul className="items-holder">
            {denominationsList.map(eachObject => (
              <DenominationItem
                key={eachObject.id}
                value={eachObject.value}
                stateChange={this.stateChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
