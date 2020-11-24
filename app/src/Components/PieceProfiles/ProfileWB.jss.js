import {
    col1 as customizeCol1,
    col2 as customizeCol2, col3 as customizeCol3,
    columnGap as customizeColumnGap, row1 as customizeRow1, row2 as customizeRow2
} from "../NewGame/Customize/sizeAndPosVariables.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
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
    },
    pieceProfileImg: {
        position: 'relative',
        width: '95%',
        height: '95%',
        margin: '2.5%',
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

})