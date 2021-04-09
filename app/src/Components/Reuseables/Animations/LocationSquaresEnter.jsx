import React from "react";
import {LocationSqrGrow} from "./LocationSqrGrow";
import {useStyles as useMoreStyles} from "../../CreatePiece/CreatePiece.jss";
import {locSqrEnter, useStyles} from "./LocationSquaresEnter.jss";
import {Portal} from "@material-ui/core";


export function LocationSquaresEnter({theme, pieceLoc, isImg, onAnimationComplete}) {
    const classes = useStyles();
    const classes2 = useMoreStyles({theme: theme});
    return (
        <Portal>
            <div className={classes2.modal} style={locSqrEnter}>
                <div className={classes.board}>
                    <LocationSqrGrow onAnimationComplete={onAnimationComplete} pieceLoc={pieceLoc} isImg={isImg} theme={theme}>
                        d4
                    </LocationSqrGrow>
                    <LocationSqrGrow onAnimationComplete={null} pieceLoc={pieceLoc} isImg={isImg} theme={theme}>
                        d5
                    </LocationSqrGrow>
                    <LocationSqrGrow onAnimationComplete={null} pieceLoc={pieceLoc} isImg={isImg} theme={theme}>
                        e4
                    </LocationSqrGrow>
                    <LocationSqrGrow onAnimationComplete={null} pieceLoc={pieceLoc} isImg={isImg} theme={theme}>
                        e5
                    </LocationSqrGrow>
                </div>
            </div>
        </Portal>
    )
}