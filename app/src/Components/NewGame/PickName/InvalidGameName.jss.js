import {modal} from "../../helpers/modal.jss";

export const styles = {
    modal: {
        ...modal,
    },
    window: {
        position: "absolute",
        zIndex: "inherit",
        left: window.screen.availWidth * 0.299,
        top: "226px/754",
        width: window.screen.availWidth * 0.389,
        height: window.screen.availHeight * 0.400,
        backgroundColor: "#515151",
        border: "1px solid #b6b6b6",
        borderRadius: "0.8em",
    },
    header: {
        position: "absolute",
        zIndex: "inherit",
        top: window.screen.availWidth * 0.053,
        width: window.screen.availWidth * 0.389,
        color: "#b6b6b6",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: window.screen.availHeight * 0.021,
        textAlign: "center",
        wordWrap: "break-word",
    },
    button: {
        position: "absolute",
        zIndex: "inherit",
        left: window.screen.availWidth * 0.160,
        top: window.screen.availHeight * 0.342,
        height: 0.0397,
        width: window.screen.availWidth * "90px/1536",
        fontSize: window.screen.availHeight * 0.0212,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        paddingTop: window.screen.availHeight * 0.00397,
        color: "#b6b6b6",
        backgroundColor: "#606060",
        border: "1px solid #606060",
        borderRadius: "0.25em",
        cursor: "pointer",
        '&:hover': {
            color: "#606060",
            backgroundColor: "#b6b6b6",
            border: "1px solid #b6b6b6",
        },
    },
};