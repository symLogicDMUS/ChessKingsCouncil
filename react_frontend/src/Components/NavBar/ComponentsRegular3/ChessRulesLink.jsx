/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import "../NavBarRegular2.css";
import "./ChessRulesLink.css";

export class ChessRulesLink extends React.Component {
  
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
            <a href="https://www.chess.com/learn-how-to-play-chess" style={{ textDecoration: 'none' }} >
                <div className="chess-rules-regular-link3" onMouseEnter={this.select} onMouseLeave={this.unselect}>
                    <img src={this.getSrc()} alt="chess rules icon" style={{width:112, height:45}} />
                </div>
            </a>
    )
  }
};

