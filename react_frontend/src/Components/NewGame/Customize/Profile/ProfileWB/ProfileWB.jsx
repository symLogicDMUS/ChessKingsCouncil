import React from "react";
import ReactDOM from "react-dom";
import { Expand } from "./Expand";
import "./ProfileWB.css";

export class ProfileWB extends React.Component {

    constructor(props) {
        super(props);
    }

    getSpans() {
        let spanString = this.props.def.spans.join(", ");
        if (spanString.length === 0)
            return "none";
        return spanString;
    }

    getOffsets() {
        let offsetString = this.props.def.offsets.join(", ");
        if (offsetString.length === 0)
            return "none";
        return offsetString;
    }

    render() {

        return(
            <div className="new-game-w-or-b-profile">
                <div className="new-game-w-or-b-profile-img-window">
                    <img src={`/Images/Pieces/${this.props.def.img}`} style={{maxHeight:"159px"}}/>
                </div>
                <div className="new-game-w-or-b-profile-color-label">Color: </div>
                <Expand 
                    def={this.props.def} 
                    piece={this.props.piece} 
                    color={this.props.color} 
                    expand={this.props.expand} 
                    value="color" 
                />
                <div className="new-game-w-or-b-profile-spans-label">Spans: </div>
                <Expand 
                    def={this.props.def} 
                    piece={this.props.piece} 
                    color={this.props.color} 
                    expand={this.props.expand} 
                    value="spans" 
                />
                <div className="new-game-w-or-b-profile-offsets-label">Offsets: </div>
                <Expand 
                    def={this.props.def} 
                    piece={this.props.piece} 
                    color={this.props.color} 
                    expand={this.props.expand} 
                    value="offsets" 
                />
                <div className="new-game-w-or-b-profile-color-value">{this.props.color}</div>
                <div className="new-game-w-or-b-profile-spans-value">{this.getSpans()}</div>

                <div className="new-game-w-or-b-profile-offsets-value">{this.getOffsets()}</div>

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