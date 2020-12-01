import {customize as sizeAndPosVariables} from "./sizeAndPosVariables.jss";

export const styles = {
    customize: {
        zIndex: 5,
        position: "absolute",
        border: "1px solid #707070",
        width: sizeAndPosVariables.windowWidth,
        height: sizeAndPosVariables.windowHeight,
        top: sizeAndPosVariables.top,
        left: sizeAndPosVariables.left,
    },
    topBar: {
        position: "absolute",
        zIndex: "inherit",
        backgroundColor: "#515151",
        border: "1px solid blue",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        width: sizeAndPosVariables.topBarWidth,
        height: sizeAndPosVariables.topBarHeight,
        top: sizeAndPosVariables.topBarTop,
        left: sizeAndPosVariables.topBarLeft,
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
        width: sizeAndPosVariables.bottomBarWidth,
        height: sizeAndPosVariables.bottomBarHeight,
        top: sizeAndPosVariables.bottomBarTop,
        left: sizeAndPosVariables.bottomBarLeft,
    },
};