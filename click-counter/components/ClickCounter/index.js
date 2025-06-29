// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(previuosState => {
      return {count: previuosState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    const element = (
      <div className="main-container">
        <h1 className="main-heading">
          The Button has been clicked <span className="count">{count}</span>
          times.
        </h1>
        <p className="main-para">Click the button to increase the count</p>
        <button onClick={this.increaseCount} className="button">
          Click Me
        </button>
      </div>
    )
    return element
  }
}

export default ClickCounter
 
