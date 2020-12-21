import React from "react";
import Box from "@material-ui/core/Box";
import {fontSizeAlt2 as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./SubList.jss";

export function SubList({ subs, theme }) {
    const classes = useStyles({fontSize: fontSize, theme: theme})

    return (
        <div className={classes.sub_list}>
            <Box className={classes.header}>
                Subs
            </Box>
            {/*<Box className={classes.piece_label_odd}>*/}
            {/*    Rook{" "}*/}
            {/*</Box>*/}
            {/*<Box className={classes.piece_value_odd}>*/}
            {/*    {subs["Rook"]}*/}
            {/*</Box>*/}
            {/*<Box className={classes.piece_label_even}>*/}
            {/*    Bishop{" "}*/}
            {/*</Box>*/}
            {/*<Box className={classes.piece_value_even}>*/}
            {/*    {subs["Bishop"]}*/}
            {/*</Box>*/}
            {/*<Box className={classes.piece_label_odd}>*/}
            {/*    Knight{" "}*/}
            {/*</Box>*/}
            {/*<Box className={classes.piece_value_odd}>*/}
            {/*    {subs["Knight"]}*/}
            {/*</Box>*/}
            {/*<Box className={classes.piece_label_even}>*/}
            {/*    Queen{" "}*/}
            {/*</Box>*/}
            {/*<Box className={classes.piece_value_even}>*/}
            {/*    {subs["Queen"]}*/}
            {/*</Box>*/}
        </div>
    );
}
