import React from "react";
import {rankfiles} from "../../../../../helpers/rankfiles";
import {sqrClasses} from  "../../../../../helpers/sqrClasses";
import {NewGameDisplaySquare as Square} from "./NewGameDisplaySquare";
import {NewGameDisplayPiece as Piece} from "./NewGameDisplayPiece";
import {getPosPx} from "../../../../../helpers/getPosPx";
import {stepFuncDict} from "../../../../../helpers/stepFuncs";
import { outOfBounds } from "../../../../../helpers/oob";
import {rfToXy, xyToRf} from "../../../../../helpers/crdCnvrt";
import { getAngle } from "../../../../../helpers/getAngle";
import "./NewGameDisplayBoard.css";

export class NewGameDisplayBoard extends React.Component {

    constructor(props) {
        super(props);
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

        this.angles = this.props.def['spans'].map(stepFuncName => getAngle(stepFuncName));

    }

    reset() {

        Object.keys(this.jumpDisplays).forEach(rf => {
            this.jumpDisplays[rf] = false;
        })
        Object.keys(this.spanDisplays).forEach(rf => {
            this.spanDisplays[rf] = false;
        })

        this.angles = this.props.def['spans'].map(stepFuncName => getAngle(stepFuncName))

    }

    setSpan(stepFunc) {
        let rf = this.props.location;
        rf = stepFunc(rf);
        while (! outOfBounds(rf) ) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    setSpans() {
        let stepFunc = null;
        for (var angle of this.angles) {
            stepFunc = stepFuncDict[angle];
            this.setSpan(stepFunc);
        }
    }

    setOffsets() {
        let [x1, y1] = rfToXy(this.props.location)
        let [dx, dy] = [-1, -1]
        this.props.def['offsets'].forEach(xy => {
            dx = x1 + xy[0]
            dy = y1 + xy[1]
            this.jumpDisplays[xyToRf(dx, dy)] = true;
        })
    }

    getSqrClass(rf) {

        let sqrClass = null;

        if (this.props.rangeType === "offsets") {
            if (this.jumpDisplays[rf]) {
                sqrClass = "new-game-display-board-offset-sqr"
            }
            else {
                sqrClass = "new-game-display-board-" + sqrClasses[rf]
            }
        }

        else {
            if (this.spanDisplays[rf]) {
                sqrClass = "new-game-display-board-span-sqr"
            }
            else {
                sqrClass = "new-game-display-board-" + sqrClasses[rf]
            }
        }

        return sqrClass;

    }

    getBoard() {

        let squares = [];
        for (var rf of rankfiles) {

            if (rf === this.props.location) {
                squares.push (
                    <Square class_={this.getSqrClass(rf)} pxPos={getPosPx(rf, 40, 320)}>
                        <Piece pieceImgBase64Str={this.props.def['img']} />
                    </Square>
                )
            }
            else {
                squares.push (
                    <Square class_={this.getSqrClass(rf)} pxPos={getPosPx(rf, 40, 320)}>
                        {null}
                    </Square> 
                )
            }

        }

        return squares;

    }
    
    render() {

        if (this.props.rangeType === "offsets")
            this.setOffsets()
        else if (this.props.rangeType === "spans")
            this.setSpans()
        else
            return <div style={{color: "#EC2525"}}>ERROR: invalid rangeType</div>

        return (
            <div className="new-game-display-board">
                {this.getBoard()}
            </div>
        )
    }
}