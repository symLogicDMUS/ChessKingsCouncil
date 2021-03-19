import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MediaQuery from "react-responsive/src";
import {useStyles} from "./SubList.jss";

export function SubList({subs, theme}) {
    const classes = useStyles({theme: theme})

    return (
        <div className={classes.sub_list}>
            <MediaQuery minWidth={1040}>
                <Box className={classes.header}>
                    Subs
                </Box>
            </MediaQuery>
            <Box className={classes.piece_label_odd}>
                <Typography className={classes.text} noWrap>Rook</Typography>
            </Box>
            <Box className={classes.piece_value_odd}>
                <Typography className={classes.text} noWrap>{subs.Rook}</Typography>
            </Box>
            <Box className={classes.piece_label_even}>
                <Typography className={classes.text} noWrap>Bishop</Typography>
            </Box>
            <Box className={classes.piece_value_even}>
                <Typography className={classes.text} noWrap>{subs.Bishop}</Typography>
            </Box>
            <Box className={classes.piece_label_odd}>
                <Typography className={classes.text} noWrap>Knight</Typography>
            </Box>
            <Box className={classes.piece_value_odd}>
                <Typography className={classes.text} noWrap>{subs.Knight}</Typography>
            </Box>
            <Box className={classes.piece_label_even}>
                <Typography className={classes.text} noWrap>Queen</Typography>
            </Box>
            <Box className={classes.piece_value_even}>
                <Typography className={classes.text} noWrap>{subs.Queen}</Typography>
            </Box>
        </div>
    );
}