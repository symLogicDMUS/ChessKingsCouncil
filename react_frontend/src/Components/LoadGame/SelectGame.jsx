import React from "react";
import "./LoadGame.css";

export class SelectGame extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const name = e.target.value;
        this.props.handleChange(name)
    }

    render() {
        if (this.props.selected) {
          return (
            <div>
              <div className="container">
                <div>
                  <img src={require("./Images/LoadGame.svg")} className="loadGame" />
                </div>
                <div className="buttonOptions">
                  <br />
                  <br />
                  <select id="games" onChange={this.handleChange}>
                    {this.props.games}
                  </select>
                  <button onClick={this.props.load}>Play</button>
                </div>
              </div>
            </div>
          );
        }
        else {
          return (
            <div>
              <div className="container">
                <div>
                  <img src={require("./Images/LoadGame.svg")} className="loadGame" />
                </div>
                <div className="buttonOptions">
                  <br />
                  <br />
                  <select id="games" onChange={this.handleChange}>
                    {this.props.games}
                  </select>
                  <button style={{backgroundColor: "grey", opacity: "0.6", color: "dark-grey", cursor:"not-allowed"}}>Play</button>
                </div>
              </div>
            </div>
          );
        }
    }
}