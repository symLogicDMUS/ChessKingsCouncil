import React from "react";
import {getColorName} from "../helpers/getColorName";
import "./MyPiecesProfileWBHeader.css";

export class  MyPiecesProfileWBHeader extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {src: "/Images/expand.svg"};
        this.expand = this.expand.bind(this);
        this.color = getColorName(this.props.color);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    expand() {
        this.props.expand(this.props.pieceName, this.props.color, this.props.rangeType);
    }
    hoverOn() {
        this.setState({src: "/Images/expand-0cc.svg"})
    }

    hoverOff() {
        this.setState({src: "/Images/expand.svg"})
    }

    render() {
        return (
            <div className={this.props.class_}>
                <div className="my-piece-wb-piece-name">
                    {this.color} {this.props.rangeType}
                </div>
                <div class_="my-piece-expand-modal" onClick={this.expand} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                    <img src={this.state.src}
                         style={{width: 16, 
                                 height: 16, 
                                 marginTop: 7, 
                                 marginLeft: 7, 
                                 cursor:"pointer"
                                }}
                         alt="expand icon"
                    />
                </div>
            </div>
        )    
    }
}