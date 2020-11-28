import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    "@media screen and (min-device-width: 768px)": {
        __expression__: "screen and (min-device-width: 768px)",
        white: {
            left: "2.5%",
            '&:hover': {
                color: "white",
                backgroundColor: "#a9a9a9",
            }
        },
        black: {
            left: "51.75%",
            '&:hover':{
                color: "white",
                backgroundColor: "#a9a9a9",
            }
        },
        button_text: {
            position: "absolute",
            top: "-25%",
            left: "23%",
        },
    },
    "@media screen and (max-device-width: 767px)": {
        __expression__: "screen and (max-device-width: 767px)",
        white: {
            left: "2.5%",
            '&:hover': {
                color: "white",
                backgroundColor: "#a9a9a9",
            }
        },
        black: {
            left: "51.75%",
            '&:hover':{
                color: "white",
                backgroundColor: "#a9a9a9",
            }
        },
        button_text: {
            position: "absolute",
            top: "-25%",
            left: "23%",
        },
    },
});
