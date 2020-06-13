import React from "react";
import {Name} from "./Name/Name";
import {Range} from "./Range/Range";
import {Icon} from "./Icon/Icon";
import {Location} from "./Location/Location";
import "./CreatePiece.css";
import {Board} from "./Board/Board";
import {stepFuncDict} from "../../helperFuncs/stepFuncs";
import {outOfBounds as oob} from "../../helperFuncs/oob";

export class CreatePiece extends React.Component {

    constructor(props) {

        super(props);

        //to put in json later:
        this.spans = {
            "90d" :false,
            "45d" :false,
            "0d"  :false,
            "315d":false,
            "270d":false,
            "225d":false,
            "180d":false,
            "135d":false
        }

        //true values rendered highlight color (currently purple) as part of span.
        this.spanDisplays = { 
            'a1': false, 'a2': false, 'a3': false, 'a4': false, 'a5': false, 'a6': false, 'a7': false, 'a8': false,
            'b1': false, 'b2': false, 'b3': false, 'b4': false, 'b5': false, 'b6': false, 'b7': false, 'b8': false,
            'c1': false, 'c2': false, 'c3': false, 'c4': false, 'c5': false, 'c6': false, 'c7': false, 'c8': false,
            'd1': false, 'd2': false, 'd3': false, 'd4': false, 'd5': false, 'd6': false, 'd7': false, 'd8': false, 
            'e1': false, 'e2': false, 'e3': false, 'e4': false, 'e5': false, 'e6': false, 'e7': false, 'e8': false, 
            'f1': false, 'f2': false, 'f3': false, 'f4': false, 'f5': false, 'f6': false, 'f7': false, 'f8': false,
            'g1': false, 'g2': false, 'g3': false, 'g4': false, 'g5': false, 'g6': false, 'g7': false, 'g8': false, 
            'h1': false, 'h2': false, 'h3': false, 'h4': false, 'h5': false, 'h6': false, 'h7': false, 'h8': false
        };


        //true values rendered highlight color (currently red) and calculate jump offsets
        this.jumps = { 
            'a1': false, 'a2': false, 'a3': false, 'a4': false, 'a5': false, 'a6': false, 'a7': false, 'a8': false,
            'b1': false, 'b2': false, 'b3': false, 'b4': false, 'b5': false, 'b6': false, 'b7': false, 'b8': false,
            'c1': false, 'c2': false, 'c3': false, 'c4': false, 'c5': false, 'c6': false, 'c7': false, 'c8': false,
            'd1': false, 'd2': false, 'd3': false, 'd4': false, 'd5': false, 'd6': false, 'd7': false, 'd8': false, 
            'e1': false, 'e2': false, 'e3': false, 'e4': false, 'e5': false, 'e6': false, 'e7': false, 'e8': false, 
            'f1': false, 'f2': false, 'f3': false, 'f4': false, 'f5': false, 'f6': false, 'f7': false, 'f8': false,
            'g1': false, 'g2': false, 'g3': false, 'g4': false, 'g5': false, 'g6': false, 'g7': false, 'g8': false, 
            'h1': false, 'h2': false, 'h3': false, 'h4': false, 'h5': false, 'h6': false, 'h7': false, 'h8': false
        };



        //to put in json later:
        this.name = ""
        this.iconPath = ""
        
        //to use for spans, update by Location:
        this.location = "d4"        

        this.state = {
            spans: this.spans,
        };

        this.togleDisplaySpan = this.togleDisplaySpan.bind(this);
    }

    componentDidMount() {
        document.body.className="create-piece-body"
    }

    togleDisplaySpan(direction) {
        const stepFunc = stepFuncDict[direction];
        this.spans[direction] = ! this.spans[direction]
        let rf = stepFunc(this.location);
        while (! oob(rf) ) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    togleJump(rf) {
        this.jumps[rf] = ! this.jumps[rf]
    }

    updateLoc(rf) {
        this.location = rf; 
    }

    getToolbar() {
        return(
            <div>
                <Name name={this.name} />
                <Range togleDisplaySpan={this.togleDisplaySpan} />
                <Icon iconPath={this.iconPath} />
                <Location updateLoc={this.updateLoc} locations={this.locations} />
            </div>    
        )
    }

    getBoard() {
        return <Board spanElements={this.spanDisplays} jumpElements={this.jumps} />
    }

    render() {
        
        return(
            <body>
                {this.getBoard()}
                {this.getToolbar()}
            </body>
        )
    }
}