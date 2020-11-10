import React from "react";
import { getColorName } from "../helpers/getColorName";
import { ProfileWBHeader } from "./ProfileWBHeader";
import { fontSizes } from "../styles/fontSizes";
import { ScrollTable } from "../Reuseables/ScrollTable";
import "./ProfileWB.scss";

export function ProfileWB({ color, screenCase, def, pieceName, expand }) {
    return (
        <div className="w-or-b-profile">
            <div className="img-label" style={{ fontSize: fontSizes[screenCase]["medium2"]() }}>
                {getColorName(color)} Image
            </div>
            <div className="img-window">
                <img src={def.img} className="piece-profile-img" alt="icon of piece" />
            </div>
            <ProfileWBHeader
                class_="spans-header"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                color={getColorName(color)}
                rangeType="spans"
            />
            <ScrollTable
                className="scroll-table"
                listItems={def.spans}
                fontStyleObject={{
                    fontSize: fontSizes[screenCase]["medium2"](),
                    paddingTop: fontSizes[screenCase]["medium2"]() * 0.07,
                }}
            />
            <ProfileWBHeader
                class_="offsets-header"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                rangeType="offsets"
                color={getColorName(color)}
            />
            <ScrollTable
                className="scroll-table"
                listItems={def.offsets}
                fontStyleObject={{
                    fontSize: fontSizes[screenCase]["medium2"](),
                    paddingTop: fontSizes[screenCase]["medium2"]() * 0.07,
                }}
            />
        </div>
    );
}

/**
 *                     color="W"
                    screenCase={screenCase}
                    def={displayDefs[pieceName]["W"]}
                    pieceName={pieceName}
                    expand={expand}
 */