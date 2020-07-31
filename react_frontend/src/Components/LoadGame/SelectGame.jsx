import React from "react";
import {NavBar} from "../NavBar/NavBarRegular";
import {NavExpand} from "../NavBar/NavExpand";
import {NavColapse} from "../NavBar/NavColapse";
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
              <div className="container">
                <div>
                  <img src={require("./Images/LoadGame.svg")} className="loadGame" alt="title for loading game" />
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
                  <img src={require("./Images/LoadGame.svg")} className="loadGame" alt="text that reads 'Load Game'" />
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
              {this.navExpanded && (<NavBar navBarPosTop={0} 
                                            navBarPosLeft={480} 
                                            backgroundColor="#000000" 
                                            iconColor="969696" 
                                            iconColorHover="ffffff" 
                                            backgroundColorSelected="#3d3d3d" 
                                            border="1px solid #515151" />)}
                {this.navExpanded && (<NavColapse left={1080}  
                                                  top={-1} 
                                                  togleNav={this.togleNav} 
                                                  backgroundColor="#000000" 
                                                  iconColor="b6b6b6" 
                                                  border="1px solid #515151" />)}
                {! this.navExpanded && (<NavExpand left={1080}  
                                                   top={-1} 
                                                   togleNav={this.togleNav} 
                                                   backgroundColor="#000000" 
                                                   iconColor="b6b6b6" 
                                                   border="1px solid #515151" />)}              
            </div>
          );
        }
    }
}