import React from "react";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {themes} from "../styles/themes.jss";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "./MuiSkeleton.jss";

export function MuiSkeleton(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <Box classes={props.classesObj}>
            <Grid container wrap="nowrap" classes={{root: classes.row}}>
                {(Array.from(new Array(6))).map((index) => (
                    <Box key={index} classes={{root: classes.load_box_container}}>
                        <Skeleton variant="rect" classes={{root: classes.load_box}} />
                        <Box pt={1}>
                            <Skeleton classes={{root: classes.underline}} />
                        </Box>
                    </Box>
                ))}
            </Grid>
            <Grid container wrap="nowrap">
                {(Array.from(new Array(6))).map((index) => (
                    <Box key={index} classes={{root: classes.load_box_container}}>
                        <Skeleton variant="rect" classes={{root: classes.load_box}} />
                        <Box pt={1}>
                            <Skeleton classes={{root: classes.underline}} />
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}