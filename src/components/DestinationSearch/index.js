// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationList from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    const word = event.target.value
    const result = word.toLowerCase()
    this.setState({
      searchInput: result,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )
    console.log(searchResults)
    return (
      <div className="main-container">
        <div className="second-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
          <h1>Destination Search</h1>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            className="icon"
            placeholder="Search"
            value={searchInput}
          />
        </div>
        <ul>
          {searchResults.map(eachItem => (
            <DestinationList itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
