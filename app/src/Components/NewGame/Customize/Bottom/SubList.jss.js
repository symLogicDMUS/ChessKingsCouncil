import { subListWidth, subListHeight, subListTop, subListLeft } from "../sizeAndPosVariables.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    subList: {
        position: "absolute",
        subListWidth: subListWidth,
        subListHeight: subListHeight,
        subListTop: subListTop,
        subListLeft: subListLeft,
        display: "grid",
        gridTemplateColumns: "20% 80%",
        gridTemplateRows: "21% 20% 20% 20% 20%",
    },

    header: {
        gridColumn: "1 / 3",
        gridRow: 1,
        ...pieceLabel(1),
        textAlign: "center",
        border: "1px solid #707070",
    },
    rookLabel: {
        gridRow: 2,
        gridColumn: 1,
        ...pieceLabel(2),
    },
    rookValue: {
        gridRow: 2,
        gridColumn: 2,
        ...subTextbox(2),
    },
    bishopLabel: {
        gridRow: 3,
        gridColumn: 1,
        ...pieceLabel(3),
    },
    bishopValue: {
        gridRow: 3,
        gridColumn: 2,
        ...subTextbox(3),
    },

    knightLabel: {
        gridRow: 4,
        gridColumn: 1,
        ...pieceLabel(4),
    },
    knightValue: {
        gridRow: 4,
        gridColumn: 2,
        ...subTextbox(4),
    },
    queenLabel: {
        gridRow: 5,
        gridColumn: 1,
        ...pieceLabel(5),
    },
    queenValue: {
        gridRow: 5,
        gridColumn: 2,
        ...subTextbox(5),
    },
});
function getBgColor(rowNum) {
    if (rowNum % 2 === 0) {
        return "#5d5d5d";
    } else {
        return "#515151";
    }
}

function subTextbox(rowNum) {
    return {
        color: "#a9a9a9",
        backgroundColor: getBgColor(rowNum),
        textAlign: "left",
        paddingLeft: "1%",
        borderRight: "1px solid #707070",
        fontFamily: 'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    };
}

function pieceLabel(rowNum) {
    return { ...subTextbox(rowNum), borderRight: "1px solid #707070" };
}