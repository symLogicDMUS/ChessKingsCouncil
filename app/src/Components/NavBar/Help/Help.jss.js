import makeStyles from "@material-ui/core/styles/makeStyles";
import {numSlides} from "./data";

export const useStyles = makeStyles({
    title: {
        position: 'absolute',
        zIndex: 5,
        height: 40,
        width: 602,
        color: '#a9a9a9',
        backgroundColor: '#515151',
        fontSize: 40,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    help_item: {
        position: "absolute",
        top: top,
        zIndex: 5,
        height: 28,
        width: 600,
        color: "#a9a9a9",
        fontSize: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        paddingTop: 1,
        border: "1px solid #a9a9a9",
        backgroundColor: '#515151',
        overflow: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
        '&:hover': {
            color: '"#72e2ff"',
        },
    },
    close_icon: {
        position: "absolute",
        zIndex: 6,
        top: 0,
        left: 585,
        width: 15,
        height: 15,
        cursor: "pointer",
    }
});
