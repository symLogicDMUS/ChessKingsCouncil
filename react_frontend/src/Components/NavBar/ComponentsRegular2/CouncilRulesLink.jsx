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

  render() {
    return (
      <Link to="/CouncilRules" style={{ textDecoration: 'none' }} >
      <div className="council-rules-regular-link2" 
           style={{backgroundColor:this.getBackgroundColor(), borderRight:this.props.border}} 
           onMouseEnter={this.select} 
           onMouseLeave={this.unselect}
        >
        <div className="council-rules-nav-bar-button-icon-container2">
          <img src={`/Images/Navbar/council-rules-invert-${this.props.iconColor}.svg`}
              style={{position:"relative",
                      top:2,
                      width:26, 
                      height:26}} 
              alt="" 
          />      
        </div>
        <div className="council-rules-nav-bar-button-text-container2" style={{color: "#" + this.props.iconColor}}>
          Council Rules
        </div>
      </div>
    </Link>
        
    )
  }

};

