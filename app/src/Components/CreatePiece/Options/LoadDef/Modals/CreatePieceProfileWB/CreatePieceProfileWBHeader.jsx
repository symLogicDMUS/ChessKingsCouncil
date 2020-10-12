import React from "react";
import {getColorName} from "../../../../../helpers/getColorName";
import "./CreatePieceProfileWBHeader.css";

export class  CreatePieceProfileWBHeader extends React.Component  {

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
                <div className="create-piece-piece-wb-piece-name">
                    {this.color} {this.props.rangeType}
                </div>
                <div class_="create-piece-piece-expand-modal" onClick={this.expand}>
                    <img src="/Images/expand.svg" style={{width: 14, height: 14, marginTop: 3, marginLeft: 3, cursor:"pointer"}}  />
                </div>
            </div>
        )    
    }
}