import React from "react";
import ReactDOM from "react-dom";
import {getColorName} from "../helpers/getColorName";
import {MyPiecesRangeTable} from "./MyPiecesRangeTable";
import {MyPiecesProfileWBHeader} from "./MyPiecesProfileWBHeader";
import "./MyPieceProfileWB.css";

export class MyPieceProfileWB extends React.Component {

    constructor(props) {
        super(props);
        this.spans = this.props.def.spans
        this.offsets = this.props.def.offsets;
        this.color = getColorName(this.props.color);
    }

    render() {

        return(
            <div className="w-or-b-profile">
                <div className="my-img-label"> {this.color} Image </div>
                <div className="my-img-window">
                    <img src={this.props.def.img} style={{width:"150px", height:"150px"}} alt="icon of piece"/>
                </div>
                <MyPiecesProfileWBHeader class_="my-spans-header"
                                         expand={this.props.expand}
                                         pieceName={this.props.pieceName} 
                                         color={this.props.color} 
                                         rangeType="spans" />
                <MyPiecesRangeTable ranges={this.spans} upArrow="my-spans-up-arrow" 
                                                        table="my-spans-table"
                                                        downArrow="my-spans-down-arrow" 
                />
                <MyPiecesProfileWBHeader class_="my-offsets-header" 
                                        expand={this.props.expand}
                                        pieceName={this.props.pieceName} 
                                        color={this.props.color} 
                                        rangeType="offsets" 
                                        />
                <MyPiecesRangeTable ranges={this.offsets} upArrow="my-offsets-up-arrow" 
                                                          table="my-offsets-table" 
                                                          downArrow="my-offsets-down-arrow" />

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
export let test = () => ReactDOM.render(<div className="profile-item"><MyPieceProfileWB def={def} color="W" /></div>, document.getElementById('root'));