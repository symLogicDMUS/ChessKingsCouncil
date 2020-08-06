import React from "react";
import {NavBar} from "../NavBar/NavBarRegular3";
import "./LoadGame.css";

export class SelectGame extends React.Component {

    constructor(props) {
        super(props)
        this.state = {bValue: true};
        this.navExpanded = true;
        this.togleNav = this.togleNav.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const name = e.target.value;
        this.props.handleChange(name)
    }

    togleNav(boolVal) {
      this.navExpanded = boolVal;
      this.setState({bValue: ! this.state.bValue});
    }
  
    render() {
        if (this.props.selected) {
          return (
            <div>
              <NavBar navBarPos="relative" navBarPosTop={0} navBarPosLeft="22.2vw" expandColapseColor="000000"/>
              <div className="container">
                <div>
                  <img src={require("./Images/LoadGame.svg")} className="load-game" alt="title for loading game" />
                </div>
                <div className="button-options">
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
              <NavBar navBarPos="relative" navBarPosTop={0} navBarPosLeft="22.2vw" expandColapseColor="000000"/>
              <div className="container">
                <div>
                  <img src={require("./Images/LoadGame.svg")} className="load-game" alt="text that reads 'Load Game'" />
                </div>
                <div className="button-options">
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