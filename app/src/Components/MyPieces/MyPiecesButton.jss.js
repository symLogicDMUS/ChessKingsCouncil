import makeStyles from "@material-ui/core/styles/makeStyles";

const button = {
    position: "absolute",
    zIndex: "inherit",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#b6b6b6",
    backgroundColor: "#5d5d5d",
    border: "1px solid #454849",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
    top: "22.5%",
    "&:hover": {
        color: "#515151",
        backgroundColor: "#b6b6b6",
    },
};

export const useStyles = makeStyles(
    {
        load: {
            ...button,
            left: "86%",
        },
        delete: {
            ...button,
            left: "93%",
        },
    },
    { index: 1 }
);
