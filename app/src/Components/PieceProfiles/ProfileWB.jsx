import React from "react";
import { getColorName } from "../helpers/getColorName";
import { ProfileWBScrollTableHeader } from "./ProfileWBScrollTableHeader";
import { ScrollTable } from "../Reuseables/ScrollTable";
import { styleObjects } from "./PieceProfileStyle";
import { fontSizes } from "../styles/fontSizes";
import "./ProfileWB.scss";

export function ProfileWB({ color, screenCase, def, pieceName, expand, pieceProfilesStyle }) {
    return (
        <div className="profile-wb" style={styleObjects[screenCase]["ProfileWB"](pieceProfilesStyle)}>
            <div className="img-label" style={{ fontSize: fontSizes[screenCase]["medium1"]() }}>
                {getColorName(color)} Image
            </div>
            <div className="img-window">
                <img src={def.img} className="piece-profile-img" alt="icon of piece" />
            </div>
            <ProfileWBScrollTableHeader
                className="spans-header"
                pieceName={pieceName}
                screenCase={screenCase}
                pieceProfilesStyle={pieceProfilesStyle}
                expand={expand}
                color={getColorName(color)}
                rangeType="spans"
            />
            <ScrollTable
                listItems={def.spans}
                screenCase={screenCase}
                cellFontSize={fontSizes[screenCase]["medium3"]()}
                styleObject={{
                    gridRow: 2,
                    gridColumn: 2,
                    width:"100%",
                    gridTemplateRows: "7.5% 17% 17% 17% 17% 17% 7.5%",
                    border: "1px solid #707070",
                    borderTop: "none",
                }}
            />
            <ProfileWBScrollTableHeader
                className="offsets-header"
                pieceName={pieceName}
                screenCase={screenCase}
                pieceProfilesStyle={pieceProfilesStyle}
                expand={expand}
                rangeType="offsets"
                color={getColorName(color)}
            />
            <ScrollTable
                listItems={def.offsets}
                screenCase={screenCase}
                cellFontSize={fontSizes[screenCase]["medium3"]()}
                styleObject={{
                    gridRow: 2,
                    gridColumn: 3,
                    width:"100%",
                    gridTemplateRows: "7.5% 17% 17% 17% 17% 17% 7.5%",
                    border: "1px solid #707070",
                    borderTop: "none",
                }}
            />
        </div>
    );
}
