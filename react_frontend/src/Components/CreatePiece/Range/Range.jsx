import React from "react";
import ReactDOM from "react-dom";
import {ArrowButton} from "./ArrowButton/ArrowButton";
import {RangeDisplayWindow} from "./RangeDisplayWindow";
import "./Range.css";


export class Range extends React.Component {

    constructor(props) {
        super(props)
        this.state = {userInput: ""}
        this.vectors = {
            "135d": "upLeft.svg",      
            "90d":  "up.svg",
            "45d":  "upRight.svg",  
            "180d": "left.svg",     
            "0d":   "right.svg",   
            "225d": "downLeft.svg", 
            "270d": "down.svg",
            "315d": "downRight.svg",
        }
        this.buttonPos = {
            "135d":{position: "absolute",    top: "0px",  left:"0px" },
            "90d": {position: "absolute",    top: "0px",  left:"35px"}, 
            "45d": {position: "absolute",    top: "0px",  left:"70px"},
            "180d":{position: "absolute",    top: "35px", left:"0px"}, 
            "0d":  {position: "absolute",    top: "35px", left:"70px"},
            "225d":{position: "absolute",    top: "70px", left:"0px" },
            "270d":{position: "absolute",    top: "70px", left:"35px"},
            "315d":{position: "absolute",    top: "70px", left:"70px"}
        }
    }


    getArrowButtons() {
        const arrowButtons = [];
        Object.entries(this.vectors).forEach( ([angle, svg]) => {
            arrowButtons.push(<ArrowButton 
                id_={angle} 
                image={svg}
                pos={this.buttonPos[angle]} 
                isActive={this.props.spans[angle]}
                togleSpan={this.props.togleSpan} 
                />)
            });
        return arrowButtons;
    }    

    getSpans() {
        let spans = []
        for (var angle of Object.keys(this.props.spans)) {
            if (this.props.spans[angle]) {
                spans.push("step_1sqr" + angle);
            }
        }
        return spans;
    }
    
    getOffsets() {
        let offsets = JSON.parse(JSON.stringify(this.props.offsets));
        return offsets;
    }

    render() {
        return(
            <div className="range-tool">
                <img src={require("./Range.svg")} className="range-title" />
                <RangeDisplayWindow spans={this.getSpans()} 
                                    offsets={this.getOffsets()} 
                                    togleSpanText={this.props.togleSpanText} 
                                    togleOffsetText={this.props.togleOffsetText} />
                <div class="direction-pad">
                    {this.getArrowButtons()}
                    <div className="middle" style={{position: "absolute", top:"35px", left:"35px"}} />
                </div>
            </div>
        );
    }
}

export let test = () => ReactDOM.render(<Range />, document.getElementById('root'));