import makeStyles from "@material-ui/core/styles/makeStyles";
export function pieceRangeHeader(row, col) {
    return {
        gridRow: row,
        gridColumn: col,
        display: "grid",
        width: "100%",
        gridTemplateColumns: "95% 5%",
        border: "1px solid #707070",
    };
}

export const useStyles = makeStyles({
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
    expandWidget: {
        gridRow: 1,
        gridColumn:2,
        cursor: 'pointer',
    },
    expandWidgetIcon: {
        position: 'relative',
        cursor: 'pointer',
        width: '80%',
        height: '80%',
        gridRow: 1,
        gridColumn: 2,
        left: '17.5%',
    }
})
