/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import {Link} from "react-router-dom";
import "../NavBarRegular2.css";
import "./CouncilRulesLink.css";

export class CouncilRulesLink extends React.Component {
    
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
      <Link to="/CouncilRules" style={{ textDecoration: 'none' }} >
        <div className="council-rules-regular-link3" onMouseEnter={this.select} onMouseLeave={this.unselect}>
          <img src={this.getSrc()} alt="council rules icon" style={{width:112, height:45}} />
        </div>
    </Link>
        
    )
  }

};

