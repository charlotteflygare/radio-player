import React from "react"
import "./station.css"

class Station extends React.Component {


 render() {
   const channelColor = {
     backgroundColor: {
       backgroundColor: `#${this.props.color}`
     }
}

   return (
        <div className="Station" style={channelColor.backgroundColor}>
          <div className="Image-container">
            <img src={this.props.image} />
          </div>
          <div className="Audio-container">
            <div className="Audio-name">
              <h2>{this.props.name}</h2>
              <p>{this.props.tag}</p>
          </div>
          <div className="Audio-player">
            <audio controls>
              <source src={this.props.audio} type="audio/mpeg"/>
            </audio>
          </div>
        </div>
      </div>

   )
 }
}

export default Station
