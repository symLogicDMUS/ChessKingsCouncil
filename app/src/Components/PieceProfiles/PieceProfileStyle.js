import { styleObjects as navBarStyleObjects } from "../NavBar/NavBarStyle";
import { winWidth, winHeight } from "../helpers/windowMeasurments";

export var styleObjects = {
    desktop: {
        margin: function () {
            return winWidth() * 0.0125;
        },

        ProfileWB: function (pieceProfilesStyle) {
            const margin = this.margin();
            const pieceProfiles = pieceProfilesStyle.PieceProfiles()
            const profileHeader = pieceProfilesStyle.ProfileHeader()
            const profileWBHeight = (pieceProfiles.height - profileHeader.height - margin * 3) * 0.5;
            const row1 = profileWBHeight * 0.15;
            const row2 = profileWBHeight * 0.85;
            const col1 = row2;
            const col23 = winWidth() * 0.4;
            return {
                display: "grid",
                gridTemplateColumns: `${col1}px ${col23}px ${col23}px`,
                gridTemplateRows: `${row1}px ${row2}px`,
                columnGap: margin,
                marginLeft: margin,
                marginBottom: margin,
            };
        },
    },
    textLabels: function () {
        return {
            fontSize: winHeight() * 0.08,
        };
    },
    // mobile: {
    // },
};
