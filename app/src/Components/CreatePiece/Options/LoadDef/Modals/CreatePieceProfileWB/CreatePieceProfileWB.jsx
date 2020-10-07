import React from "react";
import ReactDOM from "react-dom";
import {getColorName} from "../../../../../helpers/getColorName";
import {CreatePieceRangeTable} from "./CreatePieceRangeTable";
import {CreatePieceProfileWBHeader} from "./CreatePieceProfileWBHeader";
import "./CreatePieceProfileWB.css";

export class CreatePieceProfileWB extends React.Component {

    constructor(props) {
        super(props);
        this.spans = this.props.def.spans
        this.offsets = this.props.def.offsets;
        this.color = getColorName(this.props.color);
    }

    render() {

        return(
            <div className="create-piece-w-or-b-profile">
                <div className="create-piece-w-or-b-profile-img-label"> {this.color} Image </div>
                <div className="create-piece-w-or-b-profile-img-window">
                    <img src={this.props.def.img} style={{maxHeight:"159px"}}/>
                </div>
                <CreatePieceProfileWBHeader class_="create-piece-spans-header"
                                        expand={this.props.expand}
                                        pieceName={this.props.pieceName} 
                                        color={this.props.color} 
                                        rangeType="spans" />
                <CreatePieceRangeTable ranges={this.spans} upArrow="create-piece-spans-up-arrow" 
                                                        table="create-piece-spans-table"
                                                        downArrow="create-piece-spans-down-arrow" 
                />
                <CreatePieceProfileWBHeader class_="create-piece-offsets-header" 
                                        expand={this.props.expand}
                                        pieceName={this.props.pieceName} 
                                        color={this.props.color} 
                                        rangeType="offsets" 
                                        />
                <CreatePieceRangeTable ranges={this.offsets} upArrow="create-piece-offsets-up-arrow" 
                                                          table="create-piece-offsets-table" 
                                                          downArrow="create-piece-offsets-down-arrow" />

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
export let test = () => ReactDOM.render(<div className="profile-item"><CreatePieceProfileWB def={def} color="W" /></div>, document.getElementById('root'));