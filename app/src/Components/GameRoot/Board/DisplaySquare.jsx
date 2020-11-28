import React from "react";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "./DisplaySquare.jss";

export function DisplaySquare({rf}) {
    const classes = useStyles({rf})
    return <div className={binaryBoard[rf] ? classes.light_normal : classes.dark_normal}/>;
}

DisplaySquare.propTypes = {
    rf: PropTypes.string,
    classes: PropTypes.any,
};
