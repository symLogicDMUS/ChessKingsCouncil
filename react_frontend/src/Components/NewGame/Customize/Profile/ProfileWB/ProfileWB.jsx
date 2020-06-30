import React from "react";
import ReactDOM from "react-dom";
import "./ProfileWB.css";
import "../Profile.css";
import { Expand } from "./Expand";

export class ProfileWB extends React.Component {

    constructor(props) {
        super(props);
    }

    getColor() {
        return this.props.color;
    }

    getSpan(step_func) {

        const reInt = /([0-9]+)d/;
        let integer = Number(step_func.match(reInt)[1]);
        let span = null;
        switch(integer) {
            case 0:
                span = "right, "
                break;
            case 45:
                span = "upper-right, "
                break;
            case 90:
                span = "up, "
                break;
            case 135:
                span = "upper-left, "
                break;
            case 180:
                span = "left, "
                break;
            case 225:
                span = "lower-left, "
                break;
            case 270:
                span = "down, "
                break;
            case 315:
                span = "lower-right, "
                break;
            default:
                console.log("no match");
                break;
        }
    
        return span;
    
    }

    getSpans() {

        if (this.props.def.spans.length === 0)
            return null;

        let spanStrings = [];
        for (var span of this.props.def.spans) {
            spanStrings.push(this.getSpan(span))
        }
        spanStrings[spanStrings.length - 1] = spanStrings[spanStrings.length - 1].split(",")[0]
        return spanStrings;
    }
    

    getOffsets() {

        if (this.props.def.offsets.length === 0)
            return null;

        let offsetStrings = []
        this.props.def.offsets.forEach(offset => {
            offsetStrings.push(this.xOffset(offset[0]) + this.yOffset(offset[1]));
        })
        offsetStrings[offsetStrings.length - 1] = offsetStrings[offsetStrings.length - 1].split(",")[0]
        return offsetStrings;
    }

    xOffset(x) {
        if (x < 0)
            return `left ${Math.abs(Math.abs(x))} `
        else
            return `right ${x} `
    }

    yOffset(y) {
        if (y < 0)
            return `down ${Math.abs(y)}, `
        else
            return `up ${y}, `
    }

    render() {

        return(
            <div className="w-or-b-profile">
                <div className="img-window">
                    <img src={require(`../../../../MyPieces/Images/${this.props.def.img}`)} style={{maxHeight:"159px"}}/>
                </div>
                <div className="color-label">Color: </div>
                <div className="spans-label">Spans: </div>
                <div className="offsets-label">Offsets: </div>
                <div className="color-value">{this.getColor()}</div>
                <div className="spans-value">{this.getSpans()}</div>
                <Expand 
                    def={this.props.def} 
                    piece={this.props.piece} 
                    color={this.props.color} 
                    expand={this.props.expand} 
                    value="spans" 
                />
                <div className="offsets-value">{this.getOffsets()}</div>
                <Expand 
                    def={this.props.def} 
                    piece={this.props.piece} 
                    color={this.props.color} 
                    expand={this.props.expand} 
                    value="offsets" 
                />
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