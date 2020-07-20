import React from "react";
import "./PieceNameLabel.css";

export class PieceNameLabel extends React.Component {
    
    constructor(props) {
        super(props);
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
    }

    showTooltip(e) {
        this.props.nameTooltip(e, true, this.props.pieceName)
    }

    hideTooltip(e) {
        this.props.nameTooltip(e, false, null);
    }

    render() {
        return (
            <div className="new-game-name-of-piece" onMouseEnter={this.showTooltip} 
                                           onMouseLeave={this.hideTooltip} >
                {this.props.pieceName}
            </div>
        )
    }
}