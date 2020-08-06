/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBarRegular2.css";
import "./LoadGameLink.css";

export class LoadGameLink extends React.Component {
      
  constructor(props) {
    super(props);
    this.path = "/LoadGame";
    this.helpText = "You are already on this page. Go to home page and follow the link from there to start over."
    this.state = {selected: false, modal:false};
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
    this.checkDest = this.checkDest.bind(this);
  }  

  unselect() {
    this.setState({selected: false})
  }

  select() {
    this.setState({selected: true});
  }

  getSrc() {
    if (this.state.selected)
      return this.props.srcSelected
    else
      return this.props.srcNormal
  }

  checkDest() {
    if (this.path === this.props.currentPage) {
      this.props.setHelpText("", this.helpText, "none")
      this.props.togleHelpModal(true);
    }
  }

  render() {
    return (
      <Link to="/LoadGame" style={{ textDecoration: 'none' }} >
        <div className="load-game-regular-link3" onMouseEnter={this.select} onMouseLeave={this.unselect} onClick={this.checkDest}>
          <img src={this.getSrc()} alt="icon for the load game page" style={{width:112, height:45}} />
        </div>
    </Link>        
    )
  }
};

