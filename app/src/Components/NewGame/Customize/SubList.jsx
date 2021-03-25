import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MediaQuery from "react-responsive/src";
import {useStyles as useMoreStyles}
from "../../PieceProfiles/Header/ProfileHeader.jss"
import {useStyles} from "./SubList.jss";

export function SubList({subs, theme}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({theme: theme})
    return (
        <div className={classes.sub_list}>
            <MediaQuery minWidth={960}>
                <Box className={clsx(classes.header, {
                    [classes2.text]: true,
                })}>
                    Subs
                </Box>
            </MediaQuery>
            <Box className={clsx(classes.piece_label, {
                [classes.odd_row]: true,
            })}>
                <Typography className={classes.text} noWrap>Rook</Typography>
            </Box>
            <Box className={clsx(classes.piece_value, {
                [classes.odd_row]: true,
            })}>
                <Typography className={classes.text} noWrap>{subs.Rook}</Typography>
            </Box>
            <Box className={clsx(classes.piece_label, {
                [classes.even_row]: true,
            })}>
                <Typography className={classes.text} noWrap>Bishop</Typography>
            </Box>
            <Box className={clsx(classes.piece_value, {
                [classes.even_row]: true,
            })}>
                <Typography className={classes.text} noWrap>{subs.Bishop}</Typography>
            </Box>
            <Box className={clsx(classes.piece_label, {
                [classes.odd_row]: true,
            })}>
                <Typography className={classes.text} noWrap>Knight</Typography>
            </Box>
            <Box className={clsx(classes.piece_value, {
                [classes.odd_row]: true,
            })}>
                <Typography className={classes.text} noWrap>{subs.Knight}</Typography>
            </Box>
            <Box className={clsx(classes.piece_label, {
                [classes.even_row]: true,
            })}>
                <Typography className={classes.text} noWrap>Queen</Typography>
            </Box>
            <Box className={clsx(classes.piece_value, {
                [classes.even_row]: true,
            })}>
                <Typography className={classes.text} noWrap>{subs.Queen}</Typography>
            </Box>
        </div>
    );
}