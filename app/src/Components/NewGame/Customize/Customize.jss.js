import {
    bottomBarHeight,
    bottomBarLeft,
    bottomBarTop,
    bottomBarWidth, customizeHeight, customizeLeft, customizeTop, customizeWidth,
    topBarHeight,
    topBarLeft,
    topBarTop,
    topBarWidth
} from "./sizeAndPosVariables.jss";

export const styles = {
    customize: {
        zIndex: 5,
        position: "absolute",
        border: "1px solid #707070",
        width: customizeWidth,
        height: customizeHeight,
        top: customizeTop,
        left: customizeLeft,
    },
    topBar: {
        position: "absolute",
        zIndex: "inherit",
        backgroundColor: "#515151",
        border: "1px solid blue",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        width: topBarWidth,
        height: topBarHeight,
        top: topBarTop,
        left: topBarLeft,
    },
    title: {
        position: "absolute",
        color: "#a9a9a9",
        fontSize: "200%",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left",
        paddingLeft: "1%",
        border: "1px dashed green",
    },
    bottomBar: {
        position: "absolute",
        backgroundColor: "#515151",
        borderTop: "1px solid #707070",
        width: bottomBarWidth,
        height: bottomBarHeight,
        top: bottomBarTop,
        left: bottomBarLeft,
    },
};