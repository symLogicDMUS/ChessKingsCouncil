/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBarRegular2.css";
import "./MyPiecesLink.css";

export class MyPiecesLink extends React.Component {
      
  constructor(props) {
    super(props);
    this.state = {selected: false};
    this.select = this.select.bind(this);
    this.unselect = this.unselect.bind(this);
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

  render() {
    return (
      <Link to="/MyPieces" style={{ textDecoration: 'none' }} >
        <div className="my-pieces-regular-link3" onMouseEnter={this.select} onMouseLeave={this.unselect}>
          <img src={this.getSrc()} alt="icon to the my pieces page" style={{width:112, height:45}} />
        </div>
    </Link>     
    )
  }
};

