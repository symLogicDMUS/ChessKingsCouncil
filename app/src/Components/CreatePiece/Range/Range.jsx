import React from "react";
import ReactDOM from "react-dom";
import { ArrowButton } from "./ArrowButton/ArrowButton";
import { RangeDisplayWindow } from "./RangeDisplayWindow";
import { stylesObjects } from "../create-piece-styles-objects";
import "./Range.scss";
import { angleToText } from "../../helpers/spanToText";
import { offsetToText } from "../../helpers/offsetToText";

export class Range extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: "" };
        this.vectors = {
            "135d": "upLeft.svg",
            "90d": "up.svg",
            "45d": "upRight.svg",
            "180d": "left.svg",
            "0d": "right.svg",
            "225d": "downLeft.svg",
            "270d": "down.svg",
            "315d": "downRight.svg",
        };
        this.buttonPos = {
            "135d": { position: "absolute", top: "0%", left: "0%" },
            "90d": { position: "absolute", top: "0%", left: "35%" },
            "45d": { position: "absolute", top: "0%", left: "70%" },
            "180d": { position: "absolute", top: "35%", left: "0%" },
            "0d": { position: "absolute", top: "35%", left: "70%" },
            "225d": { position: "absolute", top: "70%", left: "0%" },
            "270d": { position: "absolute", top: "70%", left: "35%" },
            "315d": { position: "absolute", top: "70%", left: "70%" },
        };
    }

    getArrowButtons() {
        const arrowButtons = [];
        Object.entries(this.vectors).forEach(([angle, svg]) => {
            arrowButtons.push(
                <ArrowButton
                    id_={angle}
                    image={svg}
                    pos={this.buttonPos[angle]}
                    isActive={this.props.spans[angle]}
                    togleSpan={this.props.togleSpan}
                    setUnsaved={this.props.setUnsaved}
                    update={this.props.update}
                />
            );
        });
        return arrowButtons;
    }

    getSpans() {
        let spans = [];
        for (var angle of Object.keys(this.props.spans)) {
            if (this.props.spans[angle]) {
                spans.push(angleToText[angle]);
            }
        }
        return spans;
    }

    getOffsets() {
        return this.props.offsets.map((offset) => offsetToText(offset));
    }

    render() {
        return (
            <>
                <div className="range-tool" style={stylesObjects[this.props.screenCase]["Range"]()}>
                    <div className="range-title">Range</div>
                    <RangeDisplayWindow ranges={{ ...this.getSpans(), ...this.getOffsets() }} />
                    <div class="direction-pad">
                        {this.getArrowButtons()}
                        <div className="middle" />
                    </div>
                </div>
            </>
        );
    }
}

export let test = () => ReactDOM.render(<Range />, document.getElementById("root"));
