import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    label: {
        position: "absolute",
        zIndex: "0",
        "@media screen and (min-device-width: 768px)": {
            left: window.screen.availWidth * 0.171,
            top: window.screen.availHeight * 0.143,
            width: window.screen.availWidth * 0.39,
            height: window.screen.availHeight * 0.037,
        },
        "@media screen and (max-device-width: 767px)": {
            /**TODO*/
        },
        color: "#72e2ff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "180%",
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
});
