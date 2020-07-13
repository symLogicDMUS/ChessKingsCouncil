import React from "react";
import ReactDOM from "react-dom";
import {Name} from "./Name/Name";
import {Range} from "./Range/Range";
import {Icon} from "./Icon/Icon";
import {Location} from "./Location/Location";
import {MyBoard} from "./Board/MyBoard";
import {NameLabel} from "./NameLabel/NameLabel";
import {pieceImgDict} from "../MyPieces/pieceImgDict";
import {stepFuncDict} from "../helpers/stepFuncs";
import {outOfBounds as oob} from "../helpers/oob";
import {isIndentifier} from "../helpers/isIdentifier";
import {xyToRf, rfToXy} from "../helpers/crdCnvrt"
import {getRotations} from "./helpers/getRotations";
import {flipOffsets} from "./helpers/flipOffsets";
import {getStepFuncNames} from "./helpers/getStepFuncNames"
import {NavBar} from "../NavBar/NavBar";
import {Options} from "./Options/Options";
import {defs} from "../tests/defs1";
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
        this.imgName = {"white":null, "black":null};
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
        this.togleSpan = this.togleSpan.bind(this);
        this.togleJump = this.togleJump.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
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

        /**TODO: add guards against all possible bad user input for name */

        let namecase = this.getNameCase();
        if (namecase != "valid") {
            this.setSaveStatus(namecase);
            return
        }
            
        pieceImgDict[this.name] = this.name;

        this.defs[this.name] = { 
            "W":{"spans":null, "offsets":null, "img": null}, 
            "B":{"spans":null, "offsets": null, "img": null}
        }

        const angles = [];
        for (var s of Object.keys(this.spans)) {
            if (this.spans[s])
                angles.push(s);
        }

        this.defs[this.name]['W']['spans'] = getStepFuncNames(angles);
        this.defs[this.name]['B']['spans'] = getStepFuncNames(getRotations(angles, 180));
        this.defs[this.name]['W']["offsets"] = this.offsets;
        this.defs[this.name]['B']["offsets"] = flipOffsets(this.offsets);
        this.defs[this.name]['W']['img'] = this.imgName['white'];
        this.defs[this.name]['B']['img'] = this.imgName['black'];


        const saveApi = () => {
            return Promise.all([this.toApi()])
        }

        saveApi().then(([response]) => {
            this.props.updateDefs(this.defs);
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

    setPieceImg(color, imgName) {
        this.imgName[color] = imgName;
        this.pieceImg[color] = <img src={`/Images/Pieces/${imgName}`} width="75px" height="75px" />
        this.update();
    }

    togleSpan(angle) {
        this.spans[angle] = ! this.spans[angle];
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (! oob(rf) ) {
            this.spanDisplays[rf] = this.spans[angle];
            rf = stepFunc(rf);
        }
        this.update();
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

    resetSpanDisplays() {
        //turn off all displays
        this.spanDisplays = Object.values(this.spanDisplays).map(isSpan => isSpan & false)
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

    getNameCase() {

        if (this.name === "")
            return "blank-name";

        let name = this.name.split("")

        if (! name.every(isIndentifier))
            return "invalid-character";

        let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        if (digits.includes(name[0]))
            return "leading-digit";

        return "valid";

    }

    reset() {
        Object.keys(this.spans).forEach(rf => {this.spans[rf] = false});
        Object.keys(this.spanDisplays).forEach(rf => {this.spanDisplays[rf] = false});
        Object.keys(this.jumps).forEach(rf => {this.jumps[rf] = false});
        this.name = ""; 
        this.pieceImg = {"white":null, "black":null};
        this.location = "d4"; 
        this.offsets = []; 
        this.saveStatus = "none";
        this.update();
    }

    render() {
        
        return(
            <div>
                <NavBar />
                <Name name={this.name} updateName={this.updateName} />
                <NameLabel name={this.name} />
                <Range spans={this.spans} togleSpan={this.togleSpan} />
                <Icon pieceImg={this.pieceImg} setImg={this.setPieceImg} updateParent={this.update} />
                <Location activeLocation={this.location} setLoc={this.setLoc} />
                <Options 
                 save={this.save}
                 reset={this.reset}
                 status={this.saveStatus} 
                 saveStatus={this.setSaveStatus} 
                 name={this.name}
                 existing={Object.keys(this.defs)} />
                <MyBoard 
                 togleJump={this.togleJump} 
                 spanDisplays={this.spanDisplays} 
                 jumps={this.jumps}
                 pieceLoc={this.location} 
                 pieceImg={this.pieceImg["white"]}
                />
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<CreatePiece defs={defs} />, document.getElementById('root'));