import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    save_option: {
        position: "absolute",
        zIndex: "1",
    },
    load_option: {
        position: "absolute",
        zIndex: "1",
    },
    reset_option: {
        position: "absolute",
        zIndex: "1",
    },
    blank_option: {
        position: "absolute",
        zIndex: "1",
    },
    image: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    "@media screen and (min-device-width: 768px)": {
        save_option: {
            "@media screen and (min-device-width: 768px)": {
                left: "2.5%",
            },
            "@media screen and (max-device-width: 767px)": {
                top: "0",
                left: "7.5%",
            },
        },
        load_option: {
            "@media screen and (min-device-width: 768px)": {
                left: "27.5%",
            },
            "@media screen and (max-device-width: 767px)": {
                top: "0",
                left: "61.2135%",
            },
        },
        reset_option: {
            "@media screen and (min-device-width: 768px)": {
                left: "52.5%",
            },
            "@media screen and (max-device-width: 767px)": {
                top: "52.5%",
                left: "7.5%",

            },
        },
        blank_option: {
            "@media screen and (min-device-width: 768px)": {
                left: "77.5%",
            },
            "@media screen and (max-device-width: 767px)": {
                top: "52.5%",
                left: "61.2135%",
            },
        },
    },
});
