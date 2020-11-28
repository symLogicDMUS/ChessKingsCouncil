import makeStyles from "@material-ui/core/styles/makeStyles";

const square = {
    position: "absolute",
    zIndex: "0",
    cursor: "pointer",
    height: "12.5%",
    width: "12.5%",
    '&:hover': {
        backgroundColor: "#00ccff",
    },
}
export const useStyles = makeStyles({
    dark_sqr: {
        ...square,
        backgroundColor: "#a9a9a9",
    },
    light_sqr: {
        ...square,
        backgroundColor: "#ffffff",
    },
    offset_element: {
        ...square,
        backgroundColor: "#8b0000",
    },
    span_element: {
        ...square,
        backgroundColor: "#ec2525",
    },
});