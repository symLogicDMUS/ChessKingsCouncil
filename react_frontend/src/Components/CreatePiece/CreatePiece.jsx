import React from "react";
import ReactDOM from "react-dom";
import {Name} from "./Name/Name";
import {Range} from "./Range/Range";
import {Icon} from "./Icon/Icon";
import {Location} from "./Location/Location";
import {MyBoard} from "./Board/MyBoard";
import {NameLabel} from "./NameLabel/NameLabel";
import {stepFuncDict} from "../helpers/stepFuncs";
import {outOfBounds as oob} from "../helpers/oob";
import {xyToRf, rfToXy} from "../helpers/crdCnvrt"
import {pieceImgDict} from "../MyPieces/pieceImgDict";
import {getRotations} from "./getRotations";
import {flipOffsets} from "./flipOffsets";
import {getStepFuncNames} from "./getStepFuncNames"
import {Save} from "./Save/Save";
import "./CreatePiece.css";


export class CreatePiece extends React.Component {

    constructor(props) {

        super(props);

        // definitions for piece ranges
        this.defs = this.props.defs;

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
        this.name = "";
        this.pieceImg = {"white":null, "black":null}
        
        //to use for spans, update by Location:
        this.location = "d4"        

        //jump offsets
        this.offsets = [];

        // update to trigger render
        this.state = {
            binaryValue: 0,
        };

        //flag to displaying progress in saving piece, if any
        this.saveStatus = "none";

        //binds
        this.updateName = this.updateName.bind(this);
        this.setSaveStatus = this.setSaveStatus.bind(this);
        this.togleDisplaySpan = this.togleDisplaySpan.bind(this);
        this.togleJump = this.togleJump.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        document.body.className="create-piece-body";
    }

    update() {
        this.setState({binaryValue: ! this.state.binaryValue});
    }

    async toApi() {
        return await fetch('/save_defs', {
            method:"POST",
            body: JSON.stringify(this.defs)  
        })
    }

    save() {

        /**TODO: add guards against bad user input for name */

        pieceImgDict[this.name] = this.name;

        this.defs[this.name] = { 
            "W":{"spans":null, "offsets":null}, 
            "B":{"spans":null, "offsets": null} 
        }

        this.spans = Object.keys(this.spans).filter(s => this.spans[s])

        this.defs[this.name]['W']['spans'] = this.spans;
        this.defs[this.name]['W']["offsets"] = this.offsets;
        this.defs[this.name]['B']['spans'] = getRotations(this.spans, 180);
        this.defs[this.name]['B']["offsets"] = flipOffsets(this.offsets);

        this.defs[this.name]['W']['spans'] = getStepFuncNames(this.defs[this.name]['W']['spans']);
        this.defs[this.name]['B']['spans'] = getStepFuncNames(this.defs[this.name]['B']['spans']);

        const saveApi = () => {
            return Promise.all([this.toApi()])
        }

        saveApi().then(([response]) => {
            // this.props.updateDefs(this.defs)
            this.setSaveStatus("success");
        })
    }

    setSaveStatus(value) {
        this.saveStatus = value;
        this.update();
    }

    updateName(input) {
        this.name = input;
        this.update();
    }


    setPieceImg(imgDict, color) {
        this.pieceImg[color] = imgDict[color];
        this.update();
    }

    togleDisplaySpan(angle) {
        this.spans[angle] = ! this.spans[angle];
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (! oob(rf) ) {
            this.spanDisplays[rf] = this.spans[angle];
            rf = stepFunc(rf);
        }
        this.update();
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
                <Name name={this.name} updateName={this.updateName} />
                <NameLabel name={this.name} />
                <Range spans={this.spans} togleDisplaySpan={this.togleDisplaySpan} />
                <Icon iconPath={this.pieceImg} setPieceImg={this.setPieceImg} />
                <Location activeLocation={this.location} setLoc={this.setLoc} />
                <Save 
                 save={this.save} 
                 status={this.saveStatus} 
                 saveStatus={this.setSaveStatus} 
                 name={this.name}
                 existing={Object.keys(this.defs)} />
                <MyBoard 
                 togleJump={this.togleJump} 
                 spanDisplays={this.spanDisplays} 
                 jumps={this.jumps}
                 pieceLoc={this.location} 
                 pieceImg={this.pieceImg["white"]} //white used to develop range and black mirrors it
                />
            </body>
        )
    }
}

/*test*/
let defs = {
    "Rook":{  "W":{
                "spans":["step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d"],
                "offsets":[]},
              "B":{
                "spans":["step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d"],
                "offsets":[]}
         },
    "Bishop:":{ "W":{"spans":["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"],
                     "offsets":[]},
                "B":{"spans":["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"],
                     "offsets":[]}
            },
    "Queen":{ "W":{"spans":["step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d", "step_1sqr225d",
                         "step_1sqr270d", "step_1sqr315d"],
                "offsets":[]},
              "B":{"spans":["step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d", "step_1sqr90d",
                          "step_1sqr45d", "step_1sqr135d"]},
                   "offsets":[]},
    "Knight": {"W": {"spans": [], "offsets": [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]},
               "B": {"spans": [], "offsets": [[-1, -2], [-1, 2], [1, -2], [1, 2], [-2, -1], [-2, 1], [2, -1], [2, 1]]}
           }
  }

export let test = () => ReactDOM.render(<CreatePiece defs={defs} />, document.getElementById('root'));