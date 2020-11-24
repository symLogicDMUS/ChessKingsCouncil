import {
    margin,
    pieceNameWidth,
    pieceProfilesHeight, pieceProfilesLeft, pieceProfilesTop,
    pieceProfilesWidth, profileGridTop, profileHeaderHeight, profileHeaderWidth, subDropdownWidth,
    topBarHeight
} from "../sizeAndPosVariables.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    pieceName : {
        pieceNameWidth: pieceNameWidth,
        gridColumn: 1,
        fontSize: topBarHeight*0.7,
        zIndex: "inherit",
        color: "#a9a9a9",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        textAlign: "left",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    profileHeader : {
        zIndex: "inherit",
        backgroundColor: "#515151",
        profileHeaderWidth: profileHeaderWidth,
        profileHeaderHeight: profileHeaderHeight,
    },
    profileHeaderGrid : {
        position: "relative",
        display: "inline-grid",
        columnGap: margin,
        profileGridTop: profileGridTop,
    },
    promoCheckbox : {
        gridColumn: 2,
    },
    subDropdown : {
        gridColumn: 3,
        subDropdownWidth: subDropdownWidth,
    },
})