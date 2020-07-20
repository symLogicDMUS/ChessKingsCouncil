import React from "react";
import {getColorName} from "../../../../helpers/getColorName";
import "./NewGameProfileWBHeader.css";

export class  NewGameProfileWBHeader extends React.Component  {

    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.color = getColorName(this.props.color);
    }

    expand() {
        this.props.expand(this.props.pieceName, this.props.color, this.props.rangeType);
    }

    render() {
        return (
            <div className={this.props.class_}>
                <div className="new-game-piece-wb-piece-name">
                    {this.color} {this.props.rangeType}
                </div>
                <div class_="new-game-piece-expand-modal" onClick={this.expand}>
                    <img src="/Images/expand.svg" style={{width: 16, height: 16, marginTop: 7, marginLeft: 7, cursor:"pointer"}}  />
                </div>
            </div>
        )    
    }
}