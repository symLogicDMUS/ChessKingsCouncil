import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    button: {
        position: "absolute",
        zIndex: "0",
        width: "30%",
        height: "30%",
        backgroundColor: "#515151",
        border: "1px solid '#a9a9a9'",
        borderRadius: "5px",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#a9a9a9",
        },
    },
    button_normal_hover: {
        backgroundColor: "#a9a9a9",
    },
    direction_pad__button_selected: {
        position: "absolute",
        zIndex: "0",
        width: "30%",
        height: "30%",
        backgroundColor: "#ec2525",
        border: "1px solid #a9a9a9",
        borderRadius: "5px",
        cursor: "pointer",
    },
    vector: {
        position: "absolute",
        zIndex: "0",
        width: "66.667%",
        height: "66.667%",
        left: "16.66%",
        top: "16.66%",
    },
});
