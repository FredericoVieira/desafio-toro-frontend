import React, { Component } from 'react'

import { stocks } from './mocks/stocks'
import { API_URL } from './config'

import Bar from './components/Bar'
import Stock from './components/Stock'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { stocks: [] }
  }

  componentDidMount() {
    const socket = new WebSocket(`ws://${API_URL}/quotes`)
    socket.onmessage = event => {
      const data = JSON.parse(event.data)
      const stockId = Object.keys(data)[0]
      const newData = {
        id: stockId,
        name: stocks[stockId],
        value: data[stockId],
        variant: 'none',
        timestamp: data.timestamp,
        historic: []
      }
      const stockIdIndex = this.state.stocks.findIndex(stock => stockId === stock.id)
      if (stockIdIndex === -1) {
        const newStocks = [...this.state.stocks, newData]
        this.setState({ stocks: newStocks })
      }
      else {
        const newStocks = this.state.stocks
        if (newStocks[stockIdIndex].value < newData.value) {
          newData['variant'] = 'up'
        } else if (newStocks[stockIdIndex].value > newData.value) {
          newData['variant'] = 'down'
        }
        newStocks[stockIdIndex] = { 
          ...newData,
          historic: [
            ...newStocks[stockIdIndex]['historic'],
            { 
              value: newData.value,
              timestamp: newData.timestamp
            }
          ]
        }
        this.setState({ stocks: newStocks })
      }
    }
  }

  render() {
    return (
      <>
        <Bar />
        <Stock stocks={this.state.stocks} />
      </>
    )
  }
}
