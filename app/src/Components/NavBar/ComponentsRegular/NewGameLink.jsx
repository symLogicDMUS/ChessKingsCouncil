import React from "react";
import {Link} from "react-router-dom";
import {HelpModal} from "../../Help/HelpModal";
import "../NavBarRegular.css";
import "./NewGameLink.css";

export class NewGameLink extends React.Component {
  
  constructor(props) {
    super(props);
    this.path = "/NewGame";
    this.helpText = "You are already on this page. Go to home page and follow the link from there to start over."
    this.state = {selected: false, modal:false};
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
    this.checkDest = this.checkDest.bind(this);
  }  

  getBackgroundColor() {
    if (this.state.selected)
      return this.props.styles.backgroundColorSelected;
    else
      return this.props.styles.backgroundColor;
  }
  getIconColor() {
    if (this.state.selected)
      return this.props.styles.iconColorHover
    else
      return this.props.styles.iconColor
  }

  unselect() {
    this.setState({selected: false})
  }

  select() {
    this.setState({selected: true});
  }

  checkDest() {
    if (this.path === this.props.currentPage) {
      this.props.setHelpText("", this.helpText, "none")
      this.props.togleHelpModal(true);
    }
    else if (this.props.unsavedProgress) {
      this.props.setConfirmRedirect(true, this.path);
    }
  }

  render() {
               
    if (this.props.unsavedProgress) {
      return (
          <div className="new-game-regular-link"
              style={{ borderRight: this.props.styles.border, backgroundColor: this.getBackgroundColor(), cursor:"pointer" }}
              onMouseEnter={this.select}
              onMouseLeave={this.unselect}
              onClick={this.checkDest}>
              <div className="nav-bar-button-icon-container">
                  <img src={`/Images/Navbar/new-game-invert-${this.getIconColor()}.svg`}
                      style={{
                          position: "relative",
                          top: -3,
                          width: 20,
                          height: 20
                      }}
                      alt=""
                  />
              </div>
              <div className="nav-bar-button-text-container" style={{ color: "#" + this.getIconColor() }}>
                  New Game
              </div>
          </div>
      )
    }

    if (this.state.modal)
      return <HelpModal helpTitle="" helpText="You are allready on this page. Please go to Home and take the link from there to start over." togleHelpModal={this.togleHelpModal} />

    return (
      <Link to="/NewGame" style={{ textDecoration: 'none' }} >
      <div className=" new-game-regular-link"
           style={{borderRight:this.props.styles.border, backgroundColor:this.getBackgroundColor()}} 
           onMouseEnter={this.select} 
           onMouseLeave={this.unselect}
           onClick={this.checkDest}>
        <div className="nav-bar-button-icon-container">
          <img src={`/Images/Navbar/new-game-invert-${this.getIconColor()}.svg`} 
              style={{position:"relative",
                      top:-3,
                      width:20, 
                      height:20}} 
              alt="" 
          /> 
        </div>
        <div className="nav-bar-button-text-container" style={{color: "#" + this.getIconColor()}}>
          New Game
        </div>
      </div>
      </Link>
    )
  }  

};

