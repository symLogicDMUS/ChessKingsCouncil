import React from "react";
import { MyPiecesDisplayBoard } from "./MyPiecesDisplayBoard/MyPiecesDisplayBoard";
import { getColorName } from "../helpers/getColorName";
import "./MyPiecesDisplayBoardModal.css";

export class MyPiecesDisplayBoardModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {src:"/Images/close.svg"}
        this.close = this.close.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);

    }

    close() {
        this.props.expand(null, null, null)
    }

    hoverOn() {
        this.setState({src: "/Images/close-0cc.svg"})
    }

    hoverOff() {
        this.setState({src: "/Images/close.svg"})
    }

    render() {
        return (
            <div className="my-pieces-display-board-modal">
                <div className="my-pieces-display-board-window">
                    <div className="my-pieces-display-board-header">
                        <div className="my-pieces-display-board-header-title">
                            {getColorName(this.props.color)} {this.props.pieceName} {this.props.rangeType}
                        </div>
                        <div className="my-pieces-display-board-header-close" onClick={this.close} 
                                                                              onMouseEnter={this.hoverOn} 
                                                                              onMouseLeave={this.hoverOff}>
                            <img src={this.state.src} 
                                 style={{width: 20, 
                                         height:20, 
                                         marginTop: 5, 
                                         marginTeft: 5, 
                                         cursor:"pointer"}} 
                                 alt="close display board window" />
                        </div>
                    </div>
                    <MyPiecesDisplayBoard def={this.props.def} 
                                          color={this.props.color} 
                                          rangeType={this.props.rangeType} 
                                          pieceName={this.props.pieceName} 
                                          location={this.props.location}
                    />
                </div>
            </div>
        )
    }
}

