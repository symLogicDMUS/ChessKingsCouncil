import React from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { sqrClasses } from "../../helpers/sqrClasses";
import { DisplaySquare as Square } from "./DisplaySquare";
import { DisplayPiece as Piece } from "./DisplayPiece";
import { stepFuncDict, stepFuncDict2 } from "../../helpers/stepFuncs";
import { outOfBounds } from "../../helpers/oob";
import { rfToXy, xyToRf } from "../../helpers/crdCnvrt";
import { getAngle } from "../../CreatePiece/helpers/getAngle";
import {useStyles} from "./DisplayBoardModal.jss"
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
//import {styles} from "./DisplayBoard.jss";

export class DisplayBoard extends React.Component {
    constructor(props) {
        super(props);
        this.sqrHeightRatio = window.screen.availHeight * 0.053;
        this.sqrWidthRatio = window.screen.availWidth * 0.026;
        this.boardSize = this.sqrHeightRatio * 8;
        this.spanDisplays = getBinaryBoarAllFalse()
        this.jumpDisplays = getBinaryBoarAllFalse()
    }

    getPosPx(rf) {
        let [x, y] = rfToXy(rf);
        let left = (x - 1) * this.sqrWidthRatio;
        let top = this.boardSize - y * this.sqrHeightRatio;
        return { left: left, top: top };
    }

    reset() {
        Object.keys(this.jumpDisplays).forEach((rf) => {
            this.jumpDisplays[rf] = false;
        });
        Object.keys(this.spanDisplays).forEach((rf) => {
            this.spanDisplays[rf] = false;
        });

        this.angles = this.props.def["spans"].map((stepFuncName) => getAngle(stepFuncName));
    }

    setSpan(stepFunc) {
        //let span = [];
        let rf = this.props.location;
        rf = stepFunc(rf);
        while (!outOfBounds(rf)) {
            this.spanDisplays[rf] = true;
            rf = stepFunc(rf);
        }
    }

    setSpans() {
        let stepFunc = null;
        for (const funcName of this.props.range) {
            stepFunc = stepFuncDict2[funcName];
            this.setSpan(stepFunc);
        }
    }

    setOffsets() {
        let [x1, y1] = rfToXy(this.props.location);
        let [dx, dy] = [-1, -1];
        this.props.range.forEach((xy) => {
            dx = x1 + xy[0];
            dy = y1 + xy[1];
            this.jumpDisplays[xyToRf(dx, dy)] = true;
        });
    }

    getSqrClass(rf) {
        let sqrClass = null;

        if (this.props.rangeType === "offsets") {
            if (this.jumpDisplays[rf]) {
                sqrClass = this.props.offsetSqr;
            } else {
                sqrClass = "pieces-display-board-" + sqrClasses[rf];
            }
        } else {
            if (this.spanDisplays[rf]) {
                sqrClass = "pieces-display-board-span-sqr";
            } else {
                sqrClass = "pieces-display-board-" + sqrClasses[rf];
            }
        }

        return sqrClass;
    }

    getBoard() {
        let squares = [];
        for (const rf of rankfiles) {
            if (rf === this.props.location) {
                squares.push(
                    <Square
                        class_={this.getSqrClass(rf)}
                        properties={{
                            ...this.getPosPx(rf),
                            ...{ height: this.sqrHeightRatio, width: this.sqrWidthRatio },
                        }}
                    >
                        <Piece pieceImgBase64Str={this.props.img} />
                    </Square>
                );
            } else {
                squares.push(
                    <Square
                        class_={this.getSqrClass(rf)}
                        properties={{
                            ...this.getPosPx(rf),
                            ...{ height: this.sqrHeightRatio, width: this.sqrWidthRatio },
                        }}
                    >
                        {null}
                    </Square>
                );
            }
        }

        return squares;
    }

    render() {
        if (this.props.rangeType === "offsets") this.setOffsets();
        else if (this.props.rangeType === "spans") this.setSpans();
        else return <div style={{ color: "#EC2525" }}>ERROR: invalid rangeType</div>;
        return <div className="pieces-display-board">{this.getBoard()}</div>;
    }
}
