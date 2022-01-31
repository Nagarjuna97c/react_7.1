import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawMoney = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="name-container">
            <div className="icon">
              <p className="para">S</p>
            </div>
            <p className="para1">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="para2">Your Balance</p>
            <div className="balance-amount-container">
              <p className="heading">{balance}</p>
              <p className="para2 para3">in Rupees</p>
            </div>
          </div>
          <p className="heading heading1">Withdraw</p>
          <p className="para2">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                item={eachItem}
                key={eachItem.id}
                withdrawMoney={this.withdrawMoney}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
