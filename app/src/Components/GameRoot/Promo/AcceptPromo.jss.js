import makeStyles from "@material-ui/core/styles/makeStyles";

const button = {
    position: "absolute",
    color: "slateblue",
    backgroundColor: "white",
    cursor: "pointer",
    "@media screen and (min-device-width: 768px)": {
        top: window.screen.availHeight * 0.554,
        left: window.screen.availWidth * 0.377,
        width: window.screen.availWidth * 0.248,
        height: window.screen.availHeight * 0.029,
    },
    border: "0.5em solid slateblue",
    borderTop: "none",
    borderRadius: "1em",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
};

export const useStyles = makeStyles({
    active: {
        ...button,
        "&:hover": {
            color: "white",
            backgroundColor: "slateblue",
        },
    },

    inactive: {
        ...button,
        cursor: "not-allowed",
    },
});
