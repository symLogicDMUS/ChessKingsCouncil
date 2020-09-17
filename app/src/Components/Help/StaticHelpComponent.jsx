import React from "react";


export class StaticHelpComponent extends React.Component {

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
      this.src = this.props.highlighted;
    else
      this.src = this.props.normal;

    return (<img src={this.src} 
                 onClick={this.openHelpModal}
                 onMouseEnter={this.highlight} 
                 onMouseLeave={this.unhighlight}
                 alt="Icon for asking for help"
                 style={{position: "fixed", 
                         width:this.props.width, 
                         left:this.props.left, 
                         top:this.props.top, 
                         cursor: "pointer"}}/>)
  }

};


