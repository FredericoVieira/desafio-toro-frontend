import React, { Component } from 'react'

import Bar from './Bar'
import Stock from './Stock'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stocks: [] };
  }

  componentDidMount() {
    const socket = new WebSocket("ws://localhost:8080/quotes")
    socket.onmessage = event => {
      const data = JSON.parse(event.data)
      const stockId = Object.keys(data)[0]
      const newData = {
        id: stockId,
        value: data[stockId],
        timestamp: data.timestamp
      }
      const stockIdIndex = this.state.stocks.findIndex(stock => stockId === stock.id)
      if (stockIdIndex === -1){
        const newStocks = [...this.state.stocks, newData]
        this.setState({ stocks: newStocks })
      }
      else {
        const newStocks = [...this.state.stocks]
        newStocks[stockIdIndex] = newData
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

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [ localState, localSetState ] = useState({ stocks: [] })

//   const socket = new WebSocket("ws://localhost:8080/quotes")

//   useEffect(() => {
//     socket.onmessage = event => {
//       console.log(localState)
//       console.log(localState.stocks)
//       const data = JSON.parse(event.data)
//       const stockId = Object.keys(data)[0]
//       const stockIdIndex = localState.stocks.findIndex(stock => stockId in stock)
//       if (stockIdIndex === -1){
//         const newStocks = [...localState.stocks, data]
//         localSetState({ stocks: newStocks })
//       }
//       else {
//         const newStocks = [...localState.stocks]
//         newStocks[stockIdIndex] = data
//         localSetState({ stocks: newStocks })
//       }
//     }
//   }, [localState])

//   return (
//     <div>
//       {localState.stocks.map(stock =>
//         JSON.stringify(stock)
//       )}
//     </div>
//   )
// }

// export default App