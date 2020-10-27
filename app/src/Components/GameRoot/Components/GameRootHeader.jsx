import React from "react";
import {getColorName} from "../../helpers/getColorName";
import { getOppositeColorName } from "../../helpers/getOppositeColorName";
import "../css/GameRootHeader.scss";

export class GameRootHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.style = {color:"red"}
    }

    getStyle() {
        var width = window.screen.availHeight * 0.8;
        var height = width * 0.0667;
        var fontSize = height - height * 0.15;
        return {
            width: width,
            height: height,
            fontSize: fontSize,
            left: window.screen.availHeight * 0.37,
            top: window.screen.availHeight * 0.061,
            border: "1px dashed white"
        }
    }

    exclaimMark() {
        if (this.props.condition === 'checkmate' || this.props.condition === "stalemate")
            return '!'
        else
            return null;
    }

    getTurn() {

        let text = null;

        switch (this.props.condition) {
            case "checkmate":
                text = `${getColorName(this.props.winner)} wins!`;   
                break;
            case "stalemate":
                text = "Tie game!";
                break;
            case "check":
                text = `${getColorName(this.props.turn)}'s turn.`;
                break;
            case "resigned":
                text = `${getOppositeColorName(this.props.turn)} wins. ${getColorName(this.props.turn)}`;
                break;
            case "":
                text = `${getColorName(this.props.turn)}'s turn.`;
                break;
            default:
                text = <div style={{color:"red"}}>ERROR: condition not check, checkmate, stalemate or none.</div>;
                break;
        }

        return text;
    }

    getHeader() {

        if (this.props.condition === '') {
            return (
                <div className="board-header-label" style={this.getStyle()}>
                    {this.getTurn()}
                </div>
            );
        }

        else {
            return (
                <div className="board-header-grid" style={this.getStyle()}>
                    <div className="board-header-turn">
                        {this.getTurn()}
                    </div>
                    <div className="board-header-condition">
                        {this.props.condition}{this.exclaimMark()}
                    </div>
                </div>
            );
        }

    }


    render() {
        return (
            <>
                {this.getHeader()}
            </>
        )
    }

}