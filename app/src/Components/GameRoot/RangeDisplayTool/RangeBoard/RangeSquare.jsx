import React from "react";
import * as PropTypes from "prop-types";
import { binaryBoard } from "../../../helpers/binaryBoard";
import { useStyles } from "./RangeSquare.jss";
import {getRangeSqrClass} from "../../../Reuseables/BoardMixins.jss";

export function RangeSquare({ rf, isHighlight, children }) {
    const classes = useStyles({ rf });
    const className = getRangeSqrClass(rf, isHighlight, classes);
    return <div className={className}>{children}</div>;
}

RangeSquare.propTypes = {
    sqrClass: PropTypes.any,
    rf: PropTypes.func,
    board: PropTypes.any,
    pieceImgBase64Str: PropTypes.any,
    toggleDisplayOfPieceRange: PropTypes.func,
};
