import React from "react";
import ScrollTable from "../../../Reuseables/ScrollTable";
import {fontSizes} from "../../../styles/fontSizes";
import {useStyles} from "./PromoList.jss";


export function PromoList({promos, screenCase}) {
    const classes = useStyles({fontSize: fontSizes.medium2})
    return (
        <div className={classes.header}>
            <div className={classes.label}>
                Pawn Promotions
            </div>
            <ScrollTable
                top={0}
                left={0}
                listItems={promos}
                screenCase={screenCase}
                fontSize={fontSizes.medium2}
            />
        </div>
    );
}