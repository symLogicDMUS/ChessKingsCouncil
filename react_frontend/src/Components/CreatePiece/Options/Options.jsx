import React from "react";
import "./Options.css";
import {SavePiece} from "./SavePiece/SavePiece";
import {LoadPiece} from "./LoadPiece/LoadPiece";
import {ResetPiece} from "./ResetPiece/ResetPiece";
import {BlankPiece} from "./BlankPiece/BlankPiece";
import {ThemePiece} from "./ThemePiece/ThemePiece";

export class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state = {mouseOver: null};
        this.hoverResponse = this.hoverResponse.bind(this);
    }

    hoverResponse(optionName) {
        this.setState({mouseOver: optionName});
    }

    render() {

        this.strokeColor = "#a9a9a9";
        if (this.props.mouseOver === this.name)
            this.strokeColor = "#00CCFF";


        return (
            <div className="options-div">
                <SavePiece 
                    save={this.props.save}
                    reset={this.props.reset}
                    status={this.props.status} 
                    saveStatus={this.props.saveStatus} 
                    name={this.props.name}
                    existing={this.props.existing} 
                    hoverResponse={this.hoverResponse}
                    mouseOver={this.state.mouseOver}
                    />
                <LoadPiece  hoverResponse={this.hoverResponse} mouseOver={this.state.mouseOver} />
                <ResetPiece hoverResponse={this.hoverResponse} mouseOver={this.state.mouseOver} />
                <BlankPiece hoverResponse={this.hoverResponse} mouseOver={this.state.mouseOver} />
                <ThemePiece hoverResponse={this.hoverResponse} mouseOver={this.state.mouseOver} />
            </div>
        )
    }
}