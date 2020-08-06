/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import "../NavBarRegular2.css";
import "./AuthorGithubLink.css";

export class AuthorGithubLink extends React.Component {
      
  constructor(props) {
    super(props);
    this.state = {selected: false, modal: false};
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
      <a href="https://github.com/symLogicDMUS" style={{ textDecoration: 'none' }} >
      <div className="author-github-regular-link2"
          style={{color: "#" + this.props.iconColor, backgroundColor:this.getBackgroundColor(), borderRight:this.props.border}} 
          onMouseEnter={this.select} 
          onMouseLeave={this.unselect}
      >
        <div className="author-github-nav-bar-button-icon-container2">
        <img src={`/Images/Navbar/author-github-invert-${this.props.iconColor}.svg`}
              style={{position:"absolute",
                      top:2,
                      width:26, 
                      height:26}} 
              alt="" 
        />
        </div>
        <div className="author-github-nav-bar-button-text-container2" style={{color: "#" + this.props.iconColor}}>
          Author Github
        </div>
      </div>
    </a>
      
    )
  }
}; 