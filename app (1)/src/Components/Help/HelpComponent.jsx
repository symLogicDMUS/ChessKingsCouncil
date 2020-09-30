/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import "./HelpComponent.css";


export class HelpComponent extends React.Component {

  constructor(props) {
    super(props);
    this.src = this.props.normal;
    this.state = {highlighted: false};
    this.openHelpModal = this.openHelpModal.bind(this);
    this.highlight = this.highlight.bind(this);
    this.unhighlight = this.unhighlight.bind(this);
  }

  openHelpModal() {
    this.props.setHelpText(this.props.helpTitle, this.props.helpText, this.props.hmChildName);
    this.props.togleHelpModal(true);
  }

  highlight() {
    this.setState({highlighted: true})
  }

  unhighlight() {
    this.setState({highlighted: false})
  }

  render() {

    if (this.state.highlighted)
        this.src = this.props.highlighted
    else
        this.src = this.props.normal

    return (
        <div className="help-component" style={this.props.style} onClick={this.openHelpModal} onMouseEnter={this.highlight} onMouseLeave={this.unhighlight}>
            <img src={this.src} style={{ position:"absolute", width: this.props.style.width, height:this.props.style.height }} alt="question mark, click for help" />
            <span class="help-tooltiptext" style={{fontSize:this.props.style.height, color:this.props.color}}>Help</span>
        </div>
    );
  }
}
