import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {fontSizeAlt2 as fontSize} from "../../styles/fontSize.jss";
import MediaQuery from "react-responsive/src";
import {useStyles} from "./SubList.jss";

const pangram = 'The quick brown fox jumps over the lazy dog.';

export function SubList({subs, theme}) {
    const classes = useStyles({fontSize: fontSize, theme: theme})

    return (
        <div className={classes.sub_list}>
            <MediaQuery minDeviceWidth={768}>
                <Box className={classes.header}>
                    Subs
                </Box>
            </MediaQuery>
            <Box className={classes.piece_label_odd}>
                <Typography className={classes.text} noWrap>Rook</Typography>
            </Box>
            <Box className={classes.piece_value_odd}>
                <Typography className={classes.text} noWrap>{subs.Rook}{pangram}</Typography>
            </Box>
            <Box className={classes.piece_label_even}>
                <Typography className={classes.text} noWrap>Bishop</Typography>
            </Box>
            <Box className={classes.piece_value_even}>
                <Typography className={classes.text} noWrap>{subs.Bishop}{pangram}</Typography>
            </Box>
            <Box className={classes.piece_label_odd}>
                <Typography className={classes.text} noWrap>Knight</Typography>
            </Box>
            <Box className={classes.piece_value_odd}>
                <Typography className={classes.text} noWrap>{subs.Knight}{pangram}</Typography>
            </Box>
            <Box className={classes.piece_label_even}>
                <Typography className={classes.text} noWrap>Queen</Typography>
            </Box>
            <Box className={classes.piece_value_even}>
                <Typography className={classes.text} noWrap>{subs.Queen}{pangram}</Typography>
            </Box>
        </div>
    );
}