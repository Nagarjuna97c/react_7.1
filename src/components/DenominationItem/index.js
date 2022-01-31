import './index.css'

const DenominationItem = props => {
  const {item, withdrawMoney} = props

  const callWithdrawMoney = () => {
    withdrawMoney(item.value)
  }

  return (
    <li>
      <button
        type="button"
        className="denomination-container"
        onClick={callWithdrawMoney}
      >
        {item.value}
      </button>
    </li>
  )
}

export default DenominationItem
