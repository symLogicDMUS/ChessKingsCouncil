import React from "react";
import * as PropTypes from "prop-types";
import {useStyles} from "./AiSquare.jss";
import {binaryBoard} from "../../helpers/binaryBoard";

export function AiSquare({rf, aiStart, aiDest}) {
    const classes = useStyles({rf})

    let className = classes.none;
    if (rf === aiStart) className = classes.ai_start
    else if (rf === aiDest) className = classes.ai_dest

    return <div className={className}/>;
}

AiSquare.propTypes = {
    style: PropTypes.shape({top: PropTypes.any, left: PropTypes.func}),
    theme: PropTypes.any
};
