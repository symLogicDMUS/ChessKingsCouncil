import React from "react";
import ReactDOM from "react-dom";
import {Name} from "./Name/Name";
import {Range} from "./Range/Range";
import {Icon} from "./Icon/Icon";
import {Location} from "./Location/Location";
import {Board} from "./Board/Board";
import {stepFuncDict} from "../helpers/stepFuncs";
import {outOfBounds as oob} from "../helpers/oob";
import "./CreatePiece.css";
import {xyToRf, rfToXy} from "../helpers/crdCnvrt";

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

        //jump offsets
        this.offsets = [];

        // update to trigger render
        this.state = {
            binaryValue: 0
        };

        //binds
        this.togleDisplaySpan = this.togleDisplaySpan.bind(this);
        this.togleJump = this.togleJump.bind(this);
        this.setLoc = this.setLoc.bind(this);
    }

    componentDidMount() {
        document.body.className="create-piece-body"
    }

    update() {
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    togleDisplaySpan(angle) {
        this.spans[angle] = ! this.spans[angle];
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (! oob(rf) ) {
            this.spanDisplays[rf] = this.spans[angle];
            rf = stepFunc(rf);
        }
        this.update()
    }

    resetSpanDisplays() {
        //turn off all displays
        this.spanDisplays = Object.values(this.spanDisplays).map(isSpan => isSpan & false)
    }

    setSpan(angle) {
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (! oob(rf) ) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    setSpans() {
        Object.entries(this.spans).forEach(([angle, isActive]) => {
            if(isActive) 
                this.setSpan(angle)
        })
    }

    togleJump(rf, offset) {
        this.jumps[rf] = ! this.jumps[rf]
        if (this.offsets.includes(offset)) {
            let i = this.offsets.indexOf(offset);
            if (i > -1) 
                this.offsets.splice(i, 1)
        }
        else 
            this.offsets.push(offset);
        this.update()
    }

    resetJumpDisplays() {
        this.jumps = Object.values(this.jumps).map(isJump => isJump & false)
    }

    setJumps() {
        let [x1, y1] = rfToXy(this.location)
        let [dx, dy] = [-1, -1]
        this.offsets.forEach(xy => {
            dx = x1 + xy[0]
            dy = y1 + xy[1]
            this.jumps[xyToRf(dx, dy)] = true;
        })
    }

    setLoc(rf) {
        this.location = rf;
        this.resetSpanDisplays();
        this.resetJumpDisplays();
        this.setSpans();
        this.setJumps();
        this.update();
    }

    render() {
        
        return(
            <body>
                <Name name={this.name} />
                <Range spans={this.spans} togleDisplaySpan={this.togleDisplaySpan} />
                <Icon iconPath={this.iconPath} />
                <Location activeLocation={this.location} setLoc={this.setLoc} />
                <Board 
                togleJump={this.togleJump} 
                spanDisplays={this.spanDisplays} 
                jumps={this.jumps}
                pieceLoc={this.location} 
                pieceId={"WJ"}
                />
            </body>
        )
    }
}

export let test = () => ReactDOM.render(<CreatePiece />, document.getElementById('root'));