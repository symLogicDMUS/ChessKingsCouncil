import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {ListTitle} from "./ListTitle";
import {useStyles} from "./SubList.jss";

export function SubList({subs, theme}) {
    const classes = useStyles({theme: theme})
    return (
            <Box className={classes.sub_list}>
                <ListTitle className={classes.header} theme={theme}>
                    Subs
                </ListTitle>
                <Box className={clsx(classes.cell, {
                    [classes.odd_row]: true,
                    [classes.col1]: true,
                })}>
                    <Typography className={classes.text} noWrap>Rook</Typography>
                </Box>
                <Box className={clsx(classes.cell, {
                    [classes.odd_row]: true,
                    [classes.col2]: true,
                })}>
                    <Typography className={classes.text} noWrap>{subs.Rook}</Typography>
                </Box>
                <Box className={clsx(classes.cell, {
                    [classes.even_row]: true,
                    [classes.col1]: true,
                })}>
                    <Typography className={classes.text} noWrap>Bishop</Typography>
                </Box>
                <Box className={clsx(classes.cell, {
                    [classes.even_row]: true,
                    [classes.col2]: true,
                })}>
                    <Typography className={classes.text} noWrap>{subs.Bishop}</Typography>
                </Box>
                <Box className={clsx(classes.cell, {
                    [classes.odd_row]: true,
                    [classes.col1]: true,
                })}>
                    <Typography className={classes.text} noWrap>Knight</Typography>
                </Box>
                <Box className={clsx(classes.cell, {
                    [classes.odd_row]: true,
                    [classes.col2]: true,
                })}>
                    <Typography className={classes.text} noWrap>{subs.Knight}</Typography>
                </Box>
                <Box className={clsx(classes.cell, {
                    [classes.even_row]: true,
                    [classes.col1]: true,
                    [classes.last_row]:true,
                })}>
                    <Typography className={classes.text} noWrap>Queen</Typography>
                </Box>
                <Box className={clsx(classes.cell, {
                    [classes.even_row]: true,
                    [classes.col2]: true,
                    [classes.last_row]:true,
                })}>
                    <Typography className={classes.text} noWrap>{subs.Queen}</Typography>
                </Box>
            </Box>
    );
}