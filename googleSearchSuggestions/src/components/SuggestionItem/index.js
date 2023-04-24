// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  onClickUpdateSearchInput = () => {
    const {searchInfo, updateSearchInput} = this.props
    const {suggestion} = searchInfo
    updateSearchInput(suggestion)
  }

  render() {
    const {searchInfo} = this.props
    const {suggestion} = searchInfo
    return (
      <li className="suggestion-item" onClick={this.onClickUpdateSearchInput}>
        <p className="suggestion-text">{suggestion}</p>
        <img
          className="arrow-image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow icon"
        />
      </li>
    )
  }
}

export default SuggestionItem
