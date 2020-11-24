import React from "react";
import ScrollTable from "../../../Reuseables/ScrollTable";
import {fontSizes} from "../../../styles/fontSizes";
import {useStyles} from "./PromoList.jss";

// import {styles} from "./PromoList.jss";

export function PromoList({promos, screenCase}) {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <div className={classes.label} style={{fontSize: fontSizes[screenCase]["medium1"]()}}>
                Pawn Promotions
            </div>
            <ScrollTable
                listItems={promos}
                screenCase={screenCase}
                classes={{
                    scrollTable: {
                        position: "relative",
                        display: "grid",
                        width: "100%",
                        height: "80%",
                        top: "20%",
                        left: 0,
                        gridTemplateRows: "10% 16% 16% 16% 16% 16% 10%",
                    },
                }}
                cellFontSize={fontSizes[screenCase]["small3"]()}
            />
        </div>
    );
}
