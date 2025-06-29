// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    c1: 0,
    c2: 0,
  }

  eatMango = () => {
    this.setState(prevState => {
      return {
        c1: prevState.c1 + 1,
        c2: prevState.c2,
      }
    })
  }
  eatBanana = () => {
    this.setState(prevState => {
      return {
        c1: prevState.c1,
        c2: prevState.c2 + 1,
      }
    })
  }

  render() {
    const {c1, c2} = this.state

    const element = (
      <div className="x2">
        <h1 className="heading">
          Bob ate <span className="count">{c1}</span> mangoes{' '}
          <span className="count">{c2}</span> bananas
        </h1>
        <div className="fruitcontainer">
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img"
              alt="mango"
            />
            <button className="button" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="img"
              alt="banana"
            />
            <button className="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )

    return element
  }
}

export default FruitsCounter
 
