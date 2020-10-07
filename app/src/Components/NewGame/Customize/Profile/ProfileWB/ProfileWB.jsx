import React from "react";
import ReactDOM from "react-dom";
import {getColorName} from "../../../../helpers/getColorName";
import {NewGameRangeTable} from "./NewGameRangeTable";
import {NewGameProfileWBHeader} from "./NewGameProfileWBHeader";
import "./ProfileWB.css";

export class ProfileWB extends React.Component {

    constructor(props) {
        super(props);
        this.spans = this.props.def.spans
        this.offsets = this.props.def.offsets;
        this.color = getColorName(this.props.color);
    }

    render() {

        return(
            <div className="new-game-w-or-b-profile">
                <div className="new-game-w-or-b-profile-img-label"> {this.color} Image </div>
                <div className="new-game-w-or-b-profile-img-window">
                    <img src={this.props.def.img} style={{maxHeight:"159px"}} alt="icon of a piece"/>
                </div>
                <NewGameProfileWBHeader class_="new-game-spans-header"
                                        expand={this.props.expand}
                                        pieceName={this.props.pieceName} 
                                        color={this.props.color} 
                                        rangeType="spans" />
                <NewGameRangeTable ranges={this.spans} upArrow="new-game-spans-up-arrow" 
                                                        table="new-game-spans-table"
                                                        downArrow="new-game-spans-down-arrow" 
                />
                <NewGameProfileWBHeader class_="new-game-offsets-header" 
                                        expand={this.props.expand}
                                        pieceName={this.props.pieceName} 
                                        color={this.props.color} 
                                        rangeType="offsets" 
                                        />
                <NewGameRangeTable ranges={this.offsets} upArrow="new-game-offsets-up-arrow" 
                                                          table="new-game-offsets-table" 
                                                          downArrow="new-game-offsets-down-arrow" />

            </div>
        )
    }
}

let def = {
    "offsets":[[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]],
    "spans": [
        "step_1sqr180d",
        "step_1sqr225d",
        "step_1sqr270d",
        "step_1sqr315d",
        "step_1sqr0d",
        "step_1sqr90d",
        "step_1sqr45d",
        "step_1sqr135d"
    ],
    "img": "white_brian.svg"
}
export let test = () => ReactDOM.render(<div className="profile-item"><ProfileWB def={def} color="W" /></div>, document.getElementById('root'));