import React from "react"
import Station from "./station/station.js"


class App extends React.Component {

    state = {
      stationItems: []
    }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        stationItems: json.channels
      })
    })
  }

  render() {

    return (
      <div className="App">
        <Station />
      </div>
    )
  }

}

export default App
