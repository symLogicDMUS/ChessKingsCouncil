import { styleObjects as navBarStyleObjects } from "../NavBar/NavBarStyle";
import { winWidth, winHeight } from "../helpers/windowMeasurments";

function getProfileWBRowsColumns(pieceProfilesStyle) {
    const columnGap = pieceProfilesStyle.margin();
    const pieceProfiles = pieceProfilesStyle.pieceProfiles();
    const profileHeader = pieceProfilesStyle.profileHeader();
    const profileWBHeight = (pieceProfiles.height - profileHeader.height - columnGap * 3) * 0.5;
    const row1 = profileWBHeight * 0.15;
    const row2 = profileWBHeight * 0.85;
    const col1 = row2;
    const col23 = winWidth() * 0.4;
    return {columnGap, row1, row2, col1, col23};
}

export var styleObjects = {
    desktop: {
        Profile: function (pieceProfilesStyle) {
            const {columnGap, row1, row2, col1, col23} = getProfileWBRowsColumns(pieceProfilesStyle)
            return {
                marginLeft: pieceProfilesStyle.margin(),
                marginBottom: pieceProfilesStyle.margin(),
                width: col1 + columnGap + col23 + columnGap + col23+2,
                height: pieceProfilesStyle.profileHeader().height + columnGap + row1 + row2 + columnGap + row1 + row2 + columnGap,
                borderTop: '1px solid #707070',
            }
        },
        ProfileWB: function (pieceProfilesStyle) {
            const {columnGap, row1, row2, col1, col23} = getProfileWBRowsColumns(pieceProfilesStyle);
            return {
                position: 'relative',
                top: columnGap*2,
                display: "grid",
                gridTemplateColumns: `${col1}px ${col23}px ${col23}px`,
                gridTemplateRows: `${row1}px ${row2}px`,
                columnGap: columnGap,
                marginBottom: columnGap,
            };
        },
        displayBoardModal: function () {
            const width = winWidth() * 0.208;
            const height = winHeight() * 0.504;
            const left = winWidth()*0.5 - width*0.5;
            const top = winHeight()*0.5 - height*0.5;
            return {width: width, height: height, top: top, left: left};
        },
        displayBoard: function() {
            
        },
    },
    /*
     mobile: {
     },
     */
};
