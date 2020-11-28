import React from "react";
import ScrollTable from "../../Reuseables/ScrollTable";
import {useStyles} from "./RangeDisplayWindow.jss"
import {fontSizes} from "../../styles/fontSizes";

export function RangeDisplayWindow({ranges, screenCase}) {
    const classes = useStyles()
    return (
        <div className={classes.window}>
            <ScrollTable
                top='2em'
                left={0}
                listItems={ranges}
                screenCase={screenCase}
                fontSize={fontSizes.medium2}
            />
        </div>
    );
}
