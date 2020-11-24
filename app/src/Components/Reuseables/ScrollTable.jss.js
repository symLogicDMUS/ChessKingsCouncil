function getBgColor(rowNum) {
    if (rowNum % 2 === 0) {
        return "#5d5d5d";
    } else {
        return "#515151";
    }
}

function scrollItem(rowNum) {
    return {
        gridRow: rowNum,
        color: "#a9a9a9",
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
    upArrow: {
        gridRow: 1,
        ...arrow,
    },
    scrollTableItem1: {
        ...scrollItem(2),
    },
    scrollTableItem2: {
        ...scrollItem(3),
    },
    scrollTableItem3: {
        ...scrollItem(4),
    },
    scrollTableItem4: {
        ...scrollItem(5),
    },
    scrollTableItem5: {
        ...scrollItem(6),
    },
    downArrow: {
        gridRow: 7,
        ...arrow,
    },

    scrollArrowImg: {
        height: "100%",
        width: "100%",
    },
};