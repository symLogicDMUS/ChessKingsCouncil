import React from "react";
import { ScrollTable } from "../../../Reuseables/ScrollTable";
import { fontSizes } from "../../../styles/fontSizes";
// import "./PromoList.scss";

export function PromoList({ className, promos, screenCase }) {
    return (
        <div className={className}>
            <div className="customize-promo-label" style={{ fontSize: fontSizes[screenCase]["medium1"]() }}>
                Pawn Promotions
            </div>
            <ScrollTable
                listItems={promos}
                screenCase={screenCase}
                styleObject={{
                    width: "100%",
                    height: "80%",
                    top: "20%",
                    left: 0,
                    gridTemplateRows: "10% 16% 16% 16% 16% 16% 10%",
                }}
                cellFontSize={fontSizes[screenCase]["small3"]()}
            />
        </div>
    );
}
