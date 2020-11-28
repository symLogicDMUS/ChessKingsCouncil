import {modal} from "../../helpers/modal.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    modal: {
        ...modal
    },
    window: {
        position: "relative",
        zIndex: "10",
        "@media screen and (min-device-width: 768px)": {
            width: window.screen.availWidth * 0.5,
            left: window.screen.availWidth * 0.25,
            top: window.screen.availHeight * 0.099,
            display: "grid",
            gridTemplateRows: `${window.screen.availHeight * 0.0397}px ${window.screen.availHeight * 0.469}px ${window.screen.availHeight * 0.0599}px`,
            gridTemplateColumns: `${window.screen.availWidth * 0.5}`,
        },
        borderRadius: "1.2em",
        border: "0.2em solid #707070",
        backgroundColor: "#515151",
    },
    top: {
        position: "absolute",
        gridRow: "1",
        gridColumn: "1",
        backgroundColor: "#515151",
        borderTopLeftRadius: "0.8em",
        borderTopRightRadius: "0.8em",
        display: "grid",
        gridTemplateRows: window.screen.availHeight * 0.0398,
        gridTemplateColumns: `${window.screen.availHeight * 0.997}px ${0.01}px`,
    },
    title: {
        gridRow: 1,
        gridColumn: 1,
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "20px",
        color: "#b6b6b6",
        backgroundColor: "#515151",
    },
    close: {
        gridRow: 1,
        gridColumn: 2,
        width: "15px",
        height: "15px",
        cursor: "pointer",
    },
    close_hover: {
        backgroundColor: "#EC2525",
    },
    text_area: {
        gridColumn: 1,
        gridRow: 2,
        color: "#b6b6b6",
        backgroundColor: "#515151",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: window.screen.availHeight * 0.0198,
        paddingLeft: window.screen.availHeight * 0.030,
        paddingRight: window.screen.availHeight * 0.030,
        paddingTop: window.screen.availHeight * 0.010,
        paddingBottom: window.screen.availHeight * 0.030,
        borderBottomLeftRadius: "0.8em",
        borderBottomRightRadius: "0.8em",
        wordWrap: "break-word",
        overflowY: "scroll",
    },
    bottom: {
        MsGridRow: 3,
        gridRow: 3,
        gridColumn: 1,
        backgroundColor: "#515151",
    },
    bottom_button: {
        position: "relative",
        width: window.screen.availWidth * 0.039,
        height: window.screen.availHeight * 0.033,
        left: window.screen.availWidth * 0.229,
        top: window.screen.availHeight * 0.010,
        textAlign: "center",
        paddingTop: window.screen.availHeight * 0.0026,
        fontSize: window.screen.availHeight * 0.0172,
        color: "#b6b6b6",
        backgroundColor: "#707070",
        border: " 1px solid #707070",
        borderRadius: "0.25em",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#b6b6b6",
            color: "#515151",
        },
    },
});