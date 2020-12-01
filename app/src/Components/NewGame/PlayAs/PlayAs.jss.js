import makeStyles from "@material-ui/core/styles/makeStyles";

const playerType = {
    position: "absolute",
    left: window.screen.availWidth * 0.4186,
    width: window.screen.availWidth * 0.163,
    height: window.screen.availHeight * 0.146,
}

export const useStyles = makeStyles({
    title: {
        position: "absolute",
        height: window.screen.availHeight * 0.099,
        width: window.screen.availWidth * 0.163
    },
    test: {
        ...playerType,
        top: window.screen.availHeight * 0.238,
    },
    white: {
        ...playerType,
        top: window.screen.availHeight * 0.3,
    },
    black: {
        ...playerType,
        top: window.screen.availHeight * 0.4,
    }
});
