import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    col1 as customizeCol1,
    col2 as customizeCol2,
    col3 as customizeCol3,
    columnGap as customizeColumnGap,
    profileHeaderHeight as customizeProfileHeaderHeight,
    row1 as customizeRow1,
    row2 as customizeRow2
} from "../NewGame/Customize/sizeAndPosVariables.jss";
import {pieceRangeHeader} from "./styles/_pieceRangeHeader.jss";
/* not yet implemented. will go where needed when splitting load-delete header classes into different files:
import {
    row1 as loadDeleteRow1,
    row2 as loadDeleteRow2,
    col1 as loadDeleteCol1,
    col2 as loadDeleteCol2,
    columnGap as loadDeleteColumnGap,
} from "../MyPieces/sizeAndPosVariables.jss";
*/

export const styles = {
    "custom-game": {
        profile: {
            marginLeft: customizeColumnGap,
            marginBottom: customizeColumnGap,
            width: customizeCol1 + customizeColumnGap + customizeCol2 + customizeColumnGap + customizeCol3 + 2,
            height:
                customizeProfileHeaderHeight +
                customizeCol3 +
                customizeRow1 +
                customizeRow2 +
                customizeColumnGap +
                customizeRow1 +
                customizeRow2 +
                customizeColumnGap,
            position: 'absolute',
            zIndex: 'inherit',
            display: 'grid',
            gridTemplateColumns: '1fr',
            backgroundColor: '#515151',
            borderTop: '1px solid #707070',
            overflowY: 'scroll',
            overflowX: 'hidden',
        },
        profileWB: {
            position: "relative",
            display: "grid",
            zIndex: 'inherit',
            backgroundColor: '#515151',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            top: customizeColumnGap * 2,
            gridTemplateColumns: `${customizeCol1}px ${customizeCol2}px ${customizeCol3}px`,
            gridTemplateRows: `${customizeRow1}px ${customizeRow2}px`,
            columnGap: customizeColumnGap,
            marginBottom: customizeColumnGap,
        },
        imgLabel: {
            gridColumn: 1,
            gridRow: 1,
            fontFamily: 'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: '130%',
            textAlign: 'center',
            color: '#a9a9a9',
            border: '0.8px solid #707070',
        },
        imgWindow: {
            zIndex: "inherit",
            gridColumn: 1,
            gridRow: 2,
            objectFit: "cover",
            border: "0.8px solid #707070",
            borderTop: "none",
        }
        ,
        pieceProfileImg: {
            position: 'relative',
            width: '95%',
            height: '95%',
            margin: '2.5%',
        },
        spansHeader: {
            ...pieceRangeHeader(1, 2),
        },
        offsetsHeader: {
            ...pieceRangeHeader(1, 3),
        },
        colorAndRangeType: {
            position: "relative",
            gridRow: 1,
            gridColumn: 1,
            fontFamily: 'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            color: "#a9a9a9",
            textAlign: "center",
            width: "100%",
            height: "90%",
            left: "2.5%",
            fontSize: "130%",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        rangeTable: {
            /*spans or offsets*/
            gridRow: 2,
            gridColumn: 3,
            width: "100%",
            gridTemplateRows: "7.5% 17% 17% 17% 17% 17% 7.5%",
            border: "1px solid #707070",
            borderTop: "none",
        },
    },
    /*"load-delete": {},*/
};
