// Write your code here

// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, stateChange} = props
  const changeState = () => {
    stateChange(value)
  }
  return (
    <li className="item-holder">
      <button type="button" className="btn" onClick={changeState}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
