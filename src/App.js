import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {searchInput: '', wordList: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordList: [...prevState.wordList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordList} = this.state
    return (
      <div className="bg-container">
        <div className="primary-container">
          <h1>Count the characters like a Boss...</h1>
          <div className="container">
            {wordList.length > 0 ? (
              <ul className="list-container">
                {wordList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-element">
                      {each.item}: {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="no-img"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="secondary-container">
          <h1 className="header">Character Counter</h1>
          <div className="sub-container">
            <form onSubmit={this.onClickSubmit}>
              <div className="input-container">
                <input
                  type="input"
                  placeholder="Enter the Characters here"
                  className="input"
                  onChange={this.onChangeInput}
                  value={searchInput}
                />
                <button
                  type="button"
                  className="btn"
                  onClick={this.onClickSubmit}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
