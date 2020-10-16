import React from 'react'
import axios from 'axios'

export default class Homepage extends React.Component {
  async onClick() {
    try {
      await axios.get('/homepage', {})
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to the 2020 Browns Stats Aggregator</h2>
        <br />
        <button type="button" onClick={this.onClick}>
          Get data
        </button>
      </div>
    )
  }
}

// export default Homepage
