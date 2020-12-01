import makeStyles from "@material-ui/core/styles/makeStyles";

/**TODO: media queries*/
const button = {
    '&:hover': {
        color: "white",
        backgroundColor: "#a9a9a9",
    }
}

export const useStyles = makeStyles({
    white: {
        ...button,
        left: "2.5%",
    },
    black: {
        ...button,
        left: "51.75%",
    },
    text: {
        position: "absolute",
        top: "-25%",
        left: "23%",
    },
});
