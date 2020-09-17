/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import {HelpModal} from "../../Help/HelpModal";
import "../NavBarRegular2.css";
import "./MyPiecesLink.css";

export class MyPiecesLink extends React.Component {
      
  constructor(props) {
    super(props);
    this.state = {selected: false};
    this.currentPage = "/MyPieces";
    this.helpText = "You are already on this page. Go to home page and follow the link from there to start over."
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
    this.checkDest = this.checkDest.bind(this);
  }  

  getBackgroundColor() {
    if (this.state.selected)
      return this.props.backgroundColorSelected;
    else
      return this.props.backgroundColor;
  }

  unselect() {
    this.setState({selected: false})
  }

  select() {
    this.setState({selected: true});
  }
  
  checkDest() {
    if (this.path === this.props.currentPage) {
      this.props.setHelpText("", this.helpText, "none");
      this.props.togleHelpModal(true);
    }
  }

  render() {
                
    return (
      <Link to="/MyPieces" style={{ textDecoration: 'none' }} >
      <div className=" my-pieces-regular-link2"
           style={{backgroundColor:this.getBackgroundColor(), borderRight:this.props.border}} 
           onMouseEnter={this.select} 
           onMouseLeave={this.unselect}
           onClick={this.checkDest}>
        <div className="my-pieces-nav-bar-button-icon-container2">
          <img src={`/Images/Navbar/my-pieces-invert-${this.props.iconColor}.svg`}
              style={{position:"relative",    
                      top:2,
                      width:26, 
                      height:26}} 
              alt="" 
          />
        </div>
        <div className="my-pieces-nav-bar-button-text-container2" style={{color: "#" + this.props.iconColor}}>
          My Pieces
        </div>
      </div>
    </Link>     
    )
  }
};

