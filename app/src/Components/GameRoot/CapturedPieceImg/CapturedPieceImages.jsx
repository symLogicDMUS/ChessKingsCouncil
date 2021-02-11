import React from "react";
import Box from "@material-ui/core/Box";
import {useStyles} from "./CapturedPieceImages.jss";

export function CapturedPieceImages({capturedDict, theme}) {

    const classes = useStyles({theme});

    return (
        <div className={classes.captured_piece_img}>
            {capturedDict.W.length === 0 ? (
                <Box className={classes.empty_list} />
            ) : (
                <Box className={classes.piece_list}>
                    {capturedDict.W.map((src) => <img src={src} className={classes.piece} alt='captured piece'/>)}
                </Box>
            )}
            {capturedDict.B.length === 0 ? (
                <Box className={classes.empty_list} />
            ) : (
                <Box className={classes.piece_list}>
                    {capturedDict.B.map((src) => <img src={src} className={classes.piece} alt='captured piece'/>)}
                </Box>
            )}
        </div>
    )
}