import React from "react";
import ReactDOM from "react-dom";
import {ArrowButton} from "./ArrowButton/ArrowButton";
import "./Range.css";


export class Range extends React.Component {

    constructor(props) {
        super(props)
        this.state = {userInput: ""}
        this.vectors = {
            "135d": <img src={require("./ArrowButton/upLeft.svg")}   className="vector" />,   
            "90d":  <img src={require("./ArrowButton/up.svg")}        className="vector" />,
            "45d":  <img src={require("./ArrowButton/upRight.svg")}  className="vector" />,
            "180d": <img src={require("./ArrowButton/left.svg")}      className="vector" />,
            "0d":   <img src={require("./ArrowButton/right.svg")}       className="vector" />,
            "225d": <img src={require("./ArrowButton/downLeft.svg")}  className="vector" />,
            "270d": <img src={require("./ArrowButton/down.svg")}      className="vector" />,
            "315d": <img src={require("./ArrowButton/downRight.svg")} className="vector"  />
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
        this.arrowButtons = [];
        Object.entries(this.vectors).forEach( ([angle, svg]) => {
            this.arrowButtons.push(<ArrowButton 
                id_={angle} 
                pos={this.buttonPos[angle]} 
                image={svg}
                isActive={this.props.spans[angle]}
                togleDisplaySpan={this.props.togleDisplaySpan} 
                />)
            })
    }


    render() {

        //note: because using absolute positioning with exact px coordinates, order in div shouldn't matter
        return(
            <div className="range-tool">
                <img src={require("./Range.svg")} className="range-title" />
                <div className="display-window">
                    {/**TODO: make Component for croping image in display window */}
                </div>
                <div class="direction-pad">
                    {this.arrowButtons}
                    <div className="middle" style={{position: "absolute", top:"35px", left:"35px"}} />
                </div>
            </div>
        );
    }
}

export let test = () => ReactDOM.render(<Range />, document.getElementById('root'));