import React from "react";
import {Portal} from "@material-ui/core";
import {LocationSqrGrow} from "./LocationSqrGrow";
import { useStyles as useMoreStyles } from "../MiniVariantTool/ToolBackdrop.jss"
import {useStyles} from "./LocationSquaresEnter.jss";


export function LocationSquaresEnter(props) {
    const {theme, pieceLoc, isImg, onAnimationComplete, ...other} = props;
    const classes = useStyles();

    return (
        <Portal>
            <div className={classes.backdrop}>
                <div className={classes.board} {...other}>
                    <LocationSqrGrow onAnimationComplete={onAnimationComplete} pieceLoc={pieceLoc} theme={theme}>
                        d4
                    </LocationSqrGrow>
                    <LocationSqrGrow onAnimationComplete={null} pieceLoc={pieceLoc} theme={theme}>
                        d5
                    </LocationSqrGrow>
                    <LocationSqrGrow onAnimationComplete={null} pieceLoc={pieceLoc} theme={theme}>
                        e4
                    </LocationSqrGrow>
                    <LocationSqrGrow onAnimationComplete={null} pieceLoc={pieceLoc} theme={theme}>
                        e5
                    </LocationSqrGrow>
                </div>
            </div>
        </Portal>
    )
}