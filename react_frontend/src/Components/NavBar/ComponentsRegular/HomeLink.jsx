/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBarRegular.css";
import "./HomeLink.css";


export class HomeLink extends React.Component {

  constructor(props) {
    super(props);
    this.path = "/";
    this.state = {selected: false};
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
    this.openConfirmRedirect = this.openConfirmRedirect.bind(this);
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

  openConfirmRedirect() {
    this.props.setConfirmRedirect(true, this.path);
  }

  render() {
                    
    if (this.props.unsavedProgress) {
      return (
          <div className="home-regular"
               style={{ borderRight: this.props.styles.border, backgroundColor: this.getBackgroundColor(), cursor:"pointer" }}
               onMouseEnter={this.select}
               onMouseLeave={this.unselect}
               onClick={this.openConfirmRedirect}>
              <div className="nav-bar-button-icon-container">
                  <img src={`/Images/Navbar/home-invert-${this.getIconColor()}.svg`}
                      style={{
                          position: "relative",
                          top: -3,
                          width: 20,
                          height: 20
                      }}
                      alt=""
                  />
              </div>
              <div className="nav-bar-button-text-container-first" style={{ color: "#" + this.getIconColor() }}>
                  Home
              </div>
          </div>
      )
    }

    return (
      <Link to="/" style={{ textDecoration: 'none' }} >
      <div className="home-regular"
           style={{borderRight:this.props.styles.border, backgroundColor:this.getBackgroundColor()}} 
           onMouseEnter={this.select} 
           onMouseLeave={this.unselect}>
        <div className="nav-bar-button-icon-container">
          <img src={`/Images/Navbar/home-invert-${this.getIconColor()}.svg`} 
              style={{position:"relative",
                      top:-3,
                      width:20, 
                      height:20}} 
              alt="" 
          />     
        </div>
        <div className="nav-bar-button-text-container-first"  style={{color: "#" + this.getIconColor()}}>
          Home
        </div>
      </div>
    </Link>
    )
  }
  
};

