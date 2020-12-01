import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {DisplaySquare as Square} from "./DisplaySquare";
import {DisplayPiece as Piece} from "./DisplayPiece";
import {stepFuncDict, stepFuncDict2} from "../../helpers/stepFuncs";
import {outOfBounds} from "../../helpers/oob";
import {rfToXy, xyToRf} from "../../helpers/crdCnvrt";
import {getAngle} from "../../CreatePiece/helpers/getAngle";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {styles} from "./DisplayBoard.jss";
import withStyles from "@material-ui/core/styles/withStyles";
import {binaryBoard} from "../../helpers/binaryBoard";

export class DisplayBoard extends React.Component {

    constructor(props) {
        super(props);
        this.spanDisplays = getBinaryBoarAllFalse();
        this.jumpDisplays = getBinaryBoarAllFalse();
    }

    reset() {
        this.spanDisplays = getBinaryBoarAllFalse();
        this.jumpDisplays = getBinaryBoarAllFalse();
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

    getSqrType(rf) {
        if (this.spanDisplays[rf]) return 'span'
        if (this.jumpDisplays[rf]) return 'offset'
        if (binaryBoard[rf]) return 'light'
        return 'dark'
    }

    getBoard() {
        let squares = [];
        for (const rf of rankfiles) {
            if (rf === this.props.location) {
                squares.push(
                    <Square rf={rf} sqrType={this.getSqrType(rf)} >
                        <Piece pieceImgBase64Str={this.props.img}/>
                    </Square>
                );
            } else {
                squares.push(<Square rf={rf} sqrType={this.getSqrType(rf)}>{null}</Square>);
            }
        }

        return squares;
    }

    render() {
        if (this.props.rangeType === "offsets") this.setOffsets();
        else if (this.props.rangeType === "spans") this.setSpans();
        else return <div style={{color: "#EC2525"}}>ERROR: invalid rangeType</div>;
        return <div className={this.props.classes.displayBoard}>{this.getBoard()}</div>;
    }
}

export default withStyles(styles)(DisplayBoard)