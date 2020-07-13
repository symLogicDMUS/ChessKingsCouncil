import React from "react";
import "./Options.css";
import {SavePiece} from "./SavePiece/SavePiece";
import {LoadPiece} from "./LoadPiece/LoadPiece";
import {ResetPiece} from "./ResetPiece/ResetPiece";
import {BlankPiece} from "./BlankPiece/BlankPiece";
import {ThemePiece} from "./ThemePiece/ThemePiece";

export class Options extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="options-div">
                <div className="option">
                    <SavePiece 
                        save={this.props.save}
                        reset={this.props.reset}
                        status={this.props.status} 
                        saveStatus={this.props.saveStatus} 
                        name={this.props.name}
                        existing={this.props.existing} />
                </div>
                <LoadPiece />
                <ResetPiece />
                <BlankPiece />
                <ThemePiece />
            </div>
        )
    }
}