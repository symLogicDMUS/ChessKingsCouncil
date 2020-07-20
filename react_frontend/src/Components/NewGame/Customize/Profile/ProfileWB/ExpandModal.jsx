
import React from "react";
import { NewGameDisplayBoard } from "./NewGameDisplayBoard/NewGameDisplayBoard";
import {getColorName} from "../../../../helpers/getColorName";
import "./ExpandModal.css";


export class ExpandModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tooltip: false}
        this.togleTooltip = this.togleTooltip.bind(this);
        this.unexpand = this.unexpand.bind(this);
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

    render() {

        return (
            <div className="new-game-expand-modal">
                <div className="new-game-expand-modal-window">
                    <img src="/Images/unexpand.svg" className="new-game-modal-window-unexpand" onClick={this.unexpand} />
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