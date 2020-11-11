import React from "react";
import { ScrollTable } from "../../../Reuseables/ScrollTable";
import { fontSizes } from "../../../styles/fontSizes";
import { styleObjects } from "../styleObjects";
import "./PromoList.scss";

export function PromoList({ promos, screenCase }) {
    const fontSize = fontSizes[screenCase]["medium3"]();
    const fontStyleObject = { fontSize: fontSize, paddingTop: fontSize * 0.05 };
    return (
        <div className="pawn-promotions" style={styleObjects[screenCase]["PromoList"]()}>
            <div className="customize-promo-label" style={{ fontSize: fontSizes[screenCase]["medium1"]() }}>
                Pawn Promotions
            </div>
            <div>
                {/* <ScrollTable listItems={promos} fontStyleObject={fontStyleObject} /> */}
            </div>
        </div>
    );
}
