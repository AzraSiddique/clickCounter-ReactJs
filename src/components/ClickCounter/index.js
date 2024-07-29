import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickHere = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked
          <br />
          <span className="count">{count}</span> times.
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.clickHere}>
          Click Here
        </button>
      </div>
    )
  }
}

export default ClickCounter
