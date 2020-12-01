import { makeStyles } from "@material-ui/core/styles";

const button = {
    position: "absolute",
    left: window.screen.availWidth * 0.463,
    top: window.screen.availHeight * 0.57,
    width: window.screen.availWidth * 0.0729,
    height: window.screen.availHeight * 0.039,
    fontSize: window.screen.availHeight * 0.0267,
    paddingTop: window.screen.availHeight * 0.007,
    fontFamily: "Georgia",
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    border: "0.2em solid white",
    borderRadius: "0.5em",
};

export const useStyles = makeStyles({
    active: {
        ...button,
        cursor: "pointer",
        "&:hover": {
            color: "black",
            backgroundColor: "white",
        },
    },
    inactive: {
        ...button,
        cursor: "not-allowed",
    },
});
