// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      } else {
        return prevState
      }
    })
  }

  brake = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      } else {
        return prevState
      }
    })
  }

  render() {
    const {count} = this.state
    const element = (
      <div className="main-con">
        <h1 className="main-head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h1 className="p-1">Speed is {count}mph</h1>
        <p className="p-2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-con">
          <button className="b-1" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="b-2" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
    return element
  }
}

export default Speedometer
 
