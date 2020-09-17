import React from "react";
import ReactDOM from "react-dom";
import {ArrowButton} from "./ArrowButton/ArrowButton";
import {RangeDisplayWindow} from "./RangeDisplayWindow";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpText} from "./HelpText";
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
                setUnsaved={this.props.setUnsaved}
                update={this.props.update}
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
                <div className="range-title">Range</div>
                <HelpComponent helpTitle="Creating the Range of a Piece"
                               hmChildName="Range"
                               helpText={HelpText}
                               togleHelpModal={this.props.togleHelpModal} 
                               setHelpText={this.props.setHelpText} 
                               style={{left:63, top:16, zIndex:"inherit", width:10, height:10}}
                               normal="/Images/question-mark-a9a9a9.svg"
                               highlighted="/Images/question-mark-72e2ff.svg"
                               color="#72e2ff"                               
                />
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