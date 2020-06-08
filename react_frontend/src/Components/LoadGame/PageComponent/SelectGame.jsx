import React from "react";
import "./LoadGame.css";

export class SelectGame extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.setReady = this.props.setReady.bind(this)
    }
    
    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name)
    }

    setReady() {
      this.props.setReady(true)
    }

    render() {
        if (this.props.selected === true) {
          return (
            <div>
              <div className="container">
                <div>
                  <img src={require("../Images/LoadGame.svg")} className="loadGame" />
                </div>
                <div className="buttonOptions">
                  <br />
                  <br />
                  <select id="games" onChange={this.handleChange}>
                    {this.props.games}
                  </select>
                  <button onClick={this.setReady}>Play</button>
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
                  <img src={require("../Images/LoadGame.svg")} className="loadGame" />
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