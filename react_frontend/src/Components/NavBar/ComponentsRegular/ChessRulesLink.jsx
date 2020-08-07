/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import "../NavBarRegular.css";
import "./ChessRulesLink.css";

export class ChessRulesLink extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {selected: false};
        this.select = this.select.bind(this);
        this.unselect = this.unselect.bind(this);
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

    render() {
        return (
            <a href="https://www.chess.com/learn-how-to-play-chess" style={{ textDecoration: 'none' }} >
                <div className="chess-rules-regular-link" 
                     style={{borderRight:this.props.styles.border, backgroundColor:this.getBackgroundColor()}} 
                     onMouseEnter={this.select} 
                     onMouseLeave={this.unselect}
                >
                    <div className="nav-bar-button-icon-container">
                        <img src={`/Images/Navbar/chess-rules-invert-${this.getIconColor()}.svg`} 
                             style={{position:"relative",
                             top:-3,
                             width:20, 
                             height:20}} 
                             alt="" 
                        /> 
                </div>
                    <div className="nav-bar-button-text-container" style={{color: "#" + this.getIconColor()}}>
                        Chess Rules
                    </div>
                </div>
            </a>
    )
  }
};