
import React from "react";
import { NewGameDisplayBoard } from "./NewGameDisplayBoard/NewGameDisplayBoard";
import {getColorName} from "../../../../helpers/getColorName";
import "./ExpandModal.css";


export class ExpandModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tooltip: false, src: "/Images/unexpand.svg"}
        this.togleTooltip = this.togleTooltip.bind(this);
        this.unexpand = this.unexpand.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    unexpand() {
        this.props.expand(null, null, null);
    }

    getTitle() {
        if (this.props.rangeType === "color")
            return this.props.pieceName
        else
            return getColorName(this.props.color) + " " + this.props.pieceName +  " " + this.props.rangeType;

    }

    togleTooltip(value) {
        this.setState({tooltip: value})
    }

    hoverOn() {
        this.setState({src: "/Images/unexpand-72e2ff.svg"})
    }

    hoverOff() {
        this.setState({src: "/Images/unexpand.svg"})
    }

    render() {

        return (
            <div className="new-game-expand-modal">
                <div className="new-game-expand-modal-window">
                    <img src={this.state.src} className="new-game-modal-window-unexpand" onClick={this.unexpand} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} alt="unexpand the display-board modal"/>
                    <div className="new-game-expand-modal-window-title" onMouseEnter={() => this.togleTooltip(true)} onMouseLeave={() => this.togleTooltip(false)} >
                        {this.getTitle()}
                    </div>
                    <NewGameDisplayBoard def={this.props.def} 
                                         rangeType={this.props.rangeType} 
                                         color={this.props.color} 
                                         pieceName={this.props.pieceName} 
                                         location={this.props.location}
                    />

                </div>
                {this.state.tooltip && 
                      (<div className="new-game-tooltip">{getColorName(this.props.color)} {this.props.pieceName} {this.props.rangeType}</div>)
                }
            </div>
        )
    }
}