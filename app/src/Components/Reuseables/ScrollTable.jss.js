function getBgColor(rowNum) {
    if (rowNum % 2 === 0) {
        return "#5d5d5d";
    } else {
        return "#515151";
    }
}

function listItem(fontSize, rowNum) {
    return {
        gridRow: rowNum,
        color: "#a9a9a9",
        fontSize: fontSize,
        fontFamily: 'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        paddingLeft: "1%",
        paddingTop: "0.1%",
        textAlign: "left",
        backgroundColor: getBgColor(rowNum),
    };
}

function arrow() {
    return {
        cursor: "pointer",
        backgroundColor: "#515151",
        "&:hover": {
            backgroundColor: "#545454",
        },
    };
}

export const styles = {

    scrollTable: {
        position: 'relative',
        top: props => props.top,
        left: props => props.left,
        display: 'grid',
        MsGridRows: '0.5em 1.25em 1.25em 1.25em 1.25em 1.25em 0.5em',
        gridTemplateRows: "0.5em 1.25em 1.25em 1.25em 1.25em 1.25em 0.5em",
        border: "1px solid #707070"
    },

    upArrow: {
        gridRow: 1,
        ...arrow,
    },
    item1: props => ({
        ...listItem(props.fontSize,2),
    }),
    item2: props => ({
        ...listItem(props.fontSize,2),
    }),
    item3: props => ({
        ...listItem(props.fontSize,2),
    }),
    item4: props => ({
        ...listItem(props.fontSize,2),
    }),
    item5: props => ({
        ...listItem(props.fontSize,2),
    }),
    downArrow: {
        gridRow: 7,
        ...arrow,
    },

    arrowImg: {
        height: "100%",
        width: "100%",
    },
};