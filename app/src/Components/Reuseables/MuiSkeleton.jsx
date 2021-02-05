import React from "react";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "./MuiSkeleton.jss";


export function MuiSkeleton(props) {
    return (
        <Grid container wrap="nowrap" classes={props.classesObj}>
            {(Array.from(new Array(3))).map((index) => (
                <Box key={index} width={210} marginRight={0.5} my={5}>
                    <Skeleton variant="rect" width={210} height={118} />
                    <Box pt={0.5}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Box>
            ))}
        </Grid>
    );
}