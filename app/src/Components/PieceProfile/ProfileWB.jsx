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
            <div className="piece-profile-img">
                <img src={def.img} className="piece-profile-img" alt="icon of piece" />
            </div>
            <ProfileWBHeader
                className="spans-header"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                color={getColorName(color)}
                rangeType="spans"
            />
            <ScrollTable
                listItems={def.spans}
                fontStyleObject={{
                    fontSize: fontSizes[screenCase]["medium2"](),
                    paddingTop: fontSizes[screenCase]["medium2"]() * 0.07,
                }}
            />
            <ProfileWBHeader
                className="offsets-header"
                screenCase={screenCase}
                pieceName={pieceName}
                expand={expand}
                rangeType="offsets"
                color={getColorName(color)}
            />
            <ScrollTable
                listItems={def.offsets}
                fontStyleObject={{
                    fontSize: fontSizes[screenCase]["medium2"](),
                    paddingTop: fontSizes[screenCase]["medium2"]() * 0.07,
                }}
            />
        </div>
    );
}