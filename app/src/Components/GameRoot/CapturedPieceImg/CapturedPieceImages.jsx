import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {useStyles, whiteList} from "./CapturedPieceImages.jss";

export function CapturedPieceImages({capturedDict, theme}) {

    const classes = useStyles({theme});

    return (
        <div className={classes.captured_piece_images}>
            <Box className={classes.outlined_box} style={whiteList()}>
                <Typography className={classes.label}>white</Typography>
                {capturedDict.W.length === 0 ? (
                    <Box className={classes.empty_list}/>
                ) : (
                    <Box className={classes.piece_list}>
                        {capturedDict.W.map((src) => <img src={src} className={classes.piece} alt='captured piece'/>)}
                    </Box>
                )}
            </Box>
            <Box className={classes.outlined_box}>
                <Typography className={classes.label}>black</Typography>
                {capturedDict.B.length === 0 ? (
                    <Box className={classes.empty_list}/>
                ) : (
                    <Box className={classes.piece_list}>
                        {capturedDict.B.map((src) => <img src={src} className={classes.piece} alt='captured piece'/>)}
                    </Box>
                )}
            </Box>
        </div>
    )
}