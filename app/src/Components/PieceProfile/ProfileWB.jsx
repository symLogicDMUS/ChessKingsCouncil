import React from "react";
import ReactDOM from "react-dom";
import { Textfit } from "react-textfit";
import { RangeTable } from "./RangeTable";
import { getColorName } from "../helpers/getColorName";
import { ProfileWBHeader } from "./ProfileWBHeader";
import "./ProfileWB.scss";

export class ProfileWB extends React.Component {
    constructor(props) {
        super(props);
        this.spans = this.props.def.spans;
        this.offsets = this.props.def.offsets;
        this.color = getColorName(this.props.color);
    }

    render() {
        return (
            <div className="w-or-b-profile">
                <Textfit className="img-label">{this.color} Image</Textfit>
                <div className="img-window">
                    <img src={this.props.def.img} className="piece-profile-img" alt="icon of piece" />
                </div>
                <ProfileWBHeader
                    class_="spans-header"
                    expand={this.props.expand}
                    pieceName={this.props.pieceName}
                    color={this.props.color}
                    rangeType="spans"
                />
                <RangeTable
                    ranges={this.spans}
                    upArrow="spans-up-arrow"
                    table="spans-table"
                    downArrow="spans-down-arrow"
                />
                <ProfileWBHeader
                    class_="offsets-header"
                    expand={this.props.expand}
                    pieceName={this.props.pieceName}
                    color={this.props.color}
                    rangeType="offsets"
                />
                <RangeTable
                    ranges={this.offsets}
                    upArrow="offsets-up-arrow"
                    table="offsets-table"
                    downArrow="offsets-down-arrow"
                />
            </div>
        );
    }
}

let def = {
    offsets: [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1],
    ],
    spans: [
        "step_1sqr180d",
        "step_1sqr225d",
        "step_1sqr270d",
        "step_1sqr315d",
        "step_1sqr0d",
        "step_1sqr90d",
        "step_1sqr45d",
        "step_1sqr135d",
    ],
    img: "white_brian.svg",
};
export let test = () =>
    ReactDOM.render(
        <div className="profile-item">
            <ProfileWB def={def} color="W" />
        </div>,
        document.getElementById("root")
    );
