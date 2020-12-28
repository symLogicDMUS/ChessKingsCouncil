import makeStyles from "@material-ui/core/styles/makeStyles";
const modalWidth = window.screen.availWidth * 0.389;
const modalHeight = window.screen.availHeight * 0.400;
const modalLeft = window.screen.availWidth * 0.5 - modalWidth * 0.5;
const modalTop = window.screen.availHeight * 0.5 - modalHeight * 0.5
const modalBorderRadius = window.screen.availHeight * 0.02;

const button = {
    position: "absolute",
    top: modalHeight * 0.85,
    zIndex: "inherit",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#b6b6b6",
    backgroundColor: "#5d5d5d",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
    '&:hover': {
        color: "#515151",
        backgroundColor: "#b6b6b6",
    },
}


export const useStyles = makeStyles({
    window: {
        position: "absolute",
        left: modalLeft,
        top: modalTop,
        width: modalWidth,
        height: modalHeight,
        borderRadius: modalBorderRadius,
        zIndex: "5",
        backgroundColor: "#515151",
    },
    yes_button: {
        ...button,
        left: modalWidth * 0.4,
    },
    no_button: {
        ...button,
        left: modalWidth * 0.6
    },
    label1: {
        position: "absolute",
        zIndex: "inherit",
        width: "100%",
        top: "0%",
        height: "10%",
        color: "#b6b6b6",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontSize: "180%",
        paddingTop: "8px",
        textAlign: "center",
    },
    piece_name: {
        position: "absolute",
        zIndex: "inherit",
        top: "35%",
        width: "100%",
        height: "30%",
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#b6b6b6",
        fontSize: "180%",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    label2: {
        position: "absolute",
        zIndex: "inherit",
        top: "65%",
        width: "100%",
        height: "20%",
        color: "#b6b6b6",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontSize: "180%",
        paddingTop: "8px",
        textAlign: "center",
    },
});
