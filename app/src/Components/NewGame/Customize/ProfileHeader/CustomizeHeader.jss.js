import {customize as sizeAndPos} from "../sizeAndPosVariables.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    pieceName : {
        pieceNameWidth: sizeAndPos.pieceNameWidth,
        gridColumn: 1,
        fontSize: sizeAndPos.topBarHeight*0.7,
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
        profileHeaderWidth: sizeAndPos.profileHeaderWidth,
        profileHeaderHeight: sizeAndPos.profileHeaderHeight,
    },
    profileHeaderGrid : {
        position: "relative",
        display: "inline-grid",
        columnGap: sizeAndPos.columnGap,
        profileGridTop: sizeAndPos.profileGridTop,
    },
    promoCheckbox : {
        gridColumn: 2,
    },
    subDropdown : {
        gridColumn: 3,
        subDropdownWidth: sizeAndPos.subDropdownWidth,
    },
})