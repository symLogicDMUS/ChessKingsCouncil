/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBarRegular.css";
import "./MyPiecesLink.css";

export class MyPiecesLink extends React.Component {
      
  constructor(props) {
    super(props);
    this.state = {selected: false};
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
  }  

  getBackgroundColor() {
    if (this.state.selected)
      return this.props.backgroundColorSelected;
    else
      return this.props.backgroundColor;
  }
  getIconColor() {
    if (this.state.selected)
      return this.props.iconColorHover
    else
      return this.props.iconColor
  }

  unselect() {
    this.setState({selected: false})
  }

  select() {
    this.setState({selected: true});
  }

  render() {
    return (
      <Link to="/MyPieces" style={{ textDecoration: 'none' }} >
      <div className=" my-pieces-regular-link"
           style={{borderRight:this.props.border, backgroundColor:this.getBackgroundColor()}} 
           onMouseEnter={this.select} 
           onMouseLeave={this.unselect}>
        <div className="nav-bar-button-icon-container">
          <img src={`/Images/Navbar/my-pieces-invert-${this.getIconColor()}.svg`} 
              style={{position:"relative",
                      top:-3,
                      width:20, 
                      height:20}} 
              alt="" 
          />
        </div>
        <div className="nav-bar-button-text-container" style={{color: "#" + this.getIconColor()}}>
          My Pieces
        </div>
      </div>
    </Link>     
    )
  }
};

