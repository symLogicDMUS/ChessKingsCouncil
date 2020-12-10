import {makeStyles} from "@material-ui/core/styles"

const imgName = {
    position: "absolute",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
}

export const useStyles = makeStyles({
    selected_name: {
        ...imgName,
        "@media screen and (min-device-width: 768px)": {
            width: "57.5%",
            height: "100%",
            left: "42.5%",
            fontSize: "180%",
        },
        "@media screen and (max-device-width: 767px)": {
            display: 'none'
        },
    },
    hover_name: {
        ...imgName,
        color: "#a9a9a9",
        "@media screen and (min-device-width: 768px)": {
            width: "20.5%",
            height: "100%",
            left: "20%",
            fontSize: "110%",
        },
        "@media screen and (max-device-width: 767px)": {
            display: "none",
        },
    },
    text: {
        position: "absolute", top: "20%"
    }
});
