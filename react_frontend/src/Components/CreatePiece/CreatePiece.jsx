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
import {getSpansDict} from "./helpers/getSpansDict";
import {flipOffsets} from "./helpers/flipOffsets";
import {getStepFuncNames} from "./helpers/getStepFuncNames"
import {NavBar} from "../NavBar/NavBar";
import {SaveDef} from "./Options/SaveDef/SaveDef";
import {LoadDef} from "./Options/LoadDef/LoadDef";
import {ResetDef} from "./Options/ResetDef/ResetDef";
import {BlankDef} from "./Options/BlankDef/BlankDef";
import {ThemeCreatePiece} from "./Options/ThemeCreatePiece/ThemeCreatePiece";
import { CreatedPieceProfiles } from "./Options/LoadDef/Modals/CreatedPieceProfiles";
import {defs} from "../tests/defs1";

import "./CreatePiece.css";


export class CreatePiece extends React.Component {

    constructor(props) {

        super(props);

        // definitions for piece ranges
        this.defs = JSON.parse(JSON.stringify(this.props.defs))

        //used to record in defs object at the end:
        this.name = "";
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
        this.offsets = [];
        this.imgNames = {"white":null, "black":null};

        //static copies so can reset if want to:
        this.loadedName = null;
        this.loadedSpans = null; 
        this.loadedOffsets = null;
        this.loadedImgNames = null;

        //true values rendered highlight color (currently red) as part of span.
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


        //true values rendered highlight color (currently dark red) and calculate jump offsets
        this.jumpDisplays = { 
            'a1': false, 'a2': false, 'a3': false, 'a4': false, 'a5': false, 'a6': false, 'a7': false, 'a8': false,
            'b1': false, 'b2': false, 'b3': false, 'b4': false, 'b5': false, 'b6': false, 'b7': false, 'b8': false,
            'c1': false, 'c2': false, 'c3': false, 'c4': false, 'c5': false, 'c6': false, 'c7': false, 'c8': false,
            'd1': false, 'd2': false, 'd3': false, 'd4': false, 'd5': false, 'd6': false, 'd7': false, 'd8': false, 
            'e1': false, 'e2': false, 'e3': false, 'e4': false, 'e5': false, 'e6': false, 'e7': false, 'e8': false, 
            'f1': false, 'f2': false, 'f3': false, 'f4': false, 'f5': false, 'f6': false, 'f7': false, 'f8': false,
            'g1': false, 'g2': false, 'g3': false, 'g4': false, 'g5': false, 'g6': false, 'g7': false, 'g8': false, 
            'h1': false, 'h2': false, 'h3': false, 'h4': false, 'h5': false, 'h6': false, 'h7': false, 'h8': false
        };

        this.pieceImg = {"white":null, "black":null}
        

        //to use for spans, update by Location:
        this.location = "d4"        

        // update to trigger render
        this.state = {
            binaryValue: 0,
        };

        //flag to displaying progress in saving piece, if any
        this.saveStatus = "none";

        //attributes for various displays
        this.mouseOver = null;
        this.showSpanText = true;
        this.showOffsetText = true;
        this.isLoadModal = false;

        //binds
        this.updateName = this.updateName.bind(this);
        this.setSaveStatus = this.setSaveStatus.bind(this);
        this.togleSpan = this.togleSpan.bind(this);
        this.togleJump = this.togleJump.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.setPieceImg = this.setPieceImg.bind(this);
        this.save = this.save.bind(this);
        this.load = this.load.bind(this);
        this.reset = this.reset.bind(this);
        this.clear = this.clear.bind(this);
        this.update = this.update.bind(this);
        this.hoverResponse = this.hoverResponse.bind(this);
        this.togleSpanText = this.togleSpanText.bind(this);
        this.togleOffsetText = this.togleOffsetText.bind(this);
        this.togleLoadModal = this.togleLoadModal.bind(this);
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

    load(pieceName) {

        this.name = pieceName;
        this.spans = getSpansDict(this.defs[pieceName]['W']['spans']);
        this.offsets = this.defs[pieceName]['W']['offsets'];
        this.imgNames = { "white": this.defs[pieceName]['W']['img'],
                          "black": this.defs[pieceName]['B']['img']}
        
        // provide static copy so that can reset if want to:
        this.loadedName = JSON.parse(JSON.stringify(this.name));
        this.loadedSpans = JSON.parse(JSON.stringify(this.spans));
        this.loadedOffsets = JSON.parse(JSON.stringify(this.offsets));
        this.loadedImgNames = JSON.parse(JSON.stringify(this.imgNames));
        
        this.pieceImg['white'] = <img src={`/Images/Pieces/${this.imgNames['white']}`} width="75px" height="75px" />
        this.pieceImg['black'] = <img src={`/Images/Pieces/${this.imgNames['black']}`} width="75px" height="75px" />
        
        this.setLoc("d4");
        
        this.update();

    }

    togleLoadModal(value) {
        this.isLoadModal = value;
        this.update();
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
        this.defs[this.name]['W']['img'] = this.imgNames['white'];
        this.defs[this.name]['B']['img'] = this.imgNames['black'];


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
        this.imgNames[color] = imgName;
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
        // this.update();
    }

    setDisplaySpan(angle) {
        const stepFunc = stepFuncDict[angle];
        let rf = stepFunc(this.location);
        while (! oob(rf) ) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    setDisplaySpans() {
        Object.entries(this.spans).forEach(([angle, isActive]) => {
            if(isActive) 
                this.setDisplaySpan(angle)
        })
    }

    togleSpanText() {
        this.showSpanText = ! this.showSpanText;
        this.update();
    }

    resetSpanDisplays() {
        //turn off all displays
        this.spanDisplays = Object.values(this.spanDisplays).map(isSpan => isSpan & false)
    }

    togleJump(rf, offset) {
        this.jumpDisplays[rf] = ! this.jumpDisplays[rf]
        let offsetStrs = this.offsets.map(o => JSON.stringify(o))
        if (offsetStrs.includes(JSON.stringify(offset))) {
            let i = offsetStrs.indexOf(JSON.stringify(offset))
            this.offsets.splice(i, 1)
        }
        else 
            this.offsets.push(offset);
        // this.update();
    }

    resetJumpDisplays() {
        this.jumpDisplays = Object.values(this.jumpDisplays).map(isJump => isJump & false)
    }

    setJumpDisplays() {
        let [x1, y1] = rfToXy(this.location)
        let [dx, dy] = [-1, -1]
        this.offsets.forEach(xy => {
            dx = x1 + xy[0]
            dy = y1 + xy[1]
            this.jumpDisplays[xyToRf(dx, dy)] = true;
        })
    }

    togleOffsetText() {
        this.showOffsetText = ! this.showOffsetText;
        this.update();
    }

    setLoc(rf) {
        this.location = rf;
        this.resetSpanDisplays();
        this.resetJumpDisplays();
        this.setDisplaySpans();
        this.setJumpDisplays();
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

    hoverResponse(optionName) {
        this.mouseOver =  optionName;
        this.setState({binaryValue: ! this.state.binaryValue});
    }

    clear() {
        Object.keys(this.spans).forEach(rf => {this.spans[rf] = false});
        Object.keys(this.spanDisplays).forEach(rf => {this.spanDisplays[rf] = false});
        Object.keys(this.jumpDisplays).forEach(rf => {this.jumpDisplays[rf] = false});
        this.name = ""; 
        this.pieceImg = {"white":null, "black":null};
        this.location = "d4"; 
        this.offsets = []; 
        this.saveStatus = "none";
        this.update();
    }

    reset() {

        if (this.loadedName === null)
            this.clear()
        else {
            this.name = JSON.parse(JSON.stringify(this.loadedName));
            this.spans = JSON.parse(JSON.stringify(this.loadedSpans));
            this.offsets = JSON.parse(JSON.stringify(this.loadedOffsets));
            this.imgNames = JSON.parse(JSON.stringify(this.loadedImgNames));
            this.update()
         }           
    }

    render() {
        
        return(
            <div>
                <NavBar />
                <Name name={this.name} updateName={this.updateName} />
                <NameLabel name={this.name} />
                <Range spans={this.spans} 
                       offsets={this.offsets} 
                       togleSpan={this.togleSpan}
                       update={this.update}
                       togleOffsetText={this.togleOffsetText} 
                       togleSpanText={this.togleSpanText} />
                <Icon pieceImg={this.pieceImg} setImg={this.setPieceImg} updateParent={this.update} />
                <Location activeLocation={this.location} setLoc={this.setLoc} />
                <div className="options-tool"/>
                <SaveDef   save={this.save}
                           clear={this.clear}
                           status={this.saveStatus} 
                           saveStatus={this.setSaveStatus} 
                           name={this.props.name}
                           existing={Object.keys(this.defs)}
                           hoverResponse={this.hoverResponse}
                           mouseOver={this.mouseOver}
                />
                <LoadDef  hoverResponse={this.hoverResponse} mouseOver={this.mouseOver} togleLoadModal={this.togleLoadModal} />
                <ResetDef hoverResponse={this.hoverResponse} mouseOver={this.mouseOver} reset={this.reset} />
                <BlankDef hoverResponse={this.hoverResponse} mouseOver={this.mouseOver} clear={this.clear} />
                <ThemeCreatePiece hoverResponse={this.hoverResponse} mouseOver={this.mouseOver} />
                <MyBoard
                 togleJump={this.togleJump}
                 update={this.update}
                 spanDisplays={this.spanDisplays} 
                 jumps={this.jumpDisplays}
                 pieceLoc={this.location} 
                 pieceImg={this.pieceImg["white"]}
                 showSpanText={this.showSpanText}
                 showOffsetText={this.showOffsetText}
                />
                {this.isLoadModal && (<CreatedPieceProfiles defs={this.defs} load={this.load} togleLoadModal={this.togleLoadModal} />)}
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<CreatePiece defs={defs} />, document.getElementById('root'));