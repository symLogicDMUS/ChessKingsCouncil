import React from "react";
import Box from "@material-ui/core/Box";
import {Grid} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "./FlashingBoxes.jss";

export function FlashingBoxes(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <Box classes={props.classesObj}>
            {(Array.from(new Array(props.numRows))).map((outerIndex) => (
                <Grid container wrap="nowrap" classes={{root: classes.row}}>
                    {(Array.from(new Array(props.boxesPerRow))).map((index) => (
                        <Box key={index} classes={{root: classes.load_box_container}}>
                            <Skeleton variant="rect" classes={{root: classes.load_box}} />
                            <Box pt={1}>
                                <Skeleton classes={{root: classes.underline}} />
                            </Box>
                        </Box>
                    ))}
                </Grid>
            ))}
        </Box>
    )
}