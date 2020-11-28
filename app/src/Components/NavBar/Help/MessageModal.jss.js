import makeStyles from "@material-ui/core/styles/makeStyles";
import {modal} from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: {
        ...modal
    },
    window: {
        position: "absolute",
        zIndex: "20",
        backgroundColor: "#515151",
        border: "1px solid #5d5d5d",
    },
    title: {
        position: "absolute",
        zIndex: "inherit",
        width: "90%",
        height: "10%",
        left: "5%",
        top: "5%",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "160%",
        color: "#b6b6b6",
        backgroundColor: "#515151",
        wordWrap: "break-word",
    },
    text: {
        position: "absolute",
        top: "45%",
        left: "5%",
        width: "90%",
        height: "50%",
        zIndex: "inherit",
        color: "#b6b6b6",
        backgroundColor: "#515151",
        fontSize: "145%",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        wordWrap: "break-word",
        overflowY: "hidden",
        textOverflow: "ellipsis",
    },
    ok_button: {
        top: "90%",
        left: "55%",
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
        '&:hover': {
            color: "#515151",
            backgroundColor: "#b6b6b6",
        },
    },
    close_icon: {
        position: "absolute",
        cursor: "pointer",
        left: "95%",
        top: "2%",
        width: "5%",
        height: "5%",
        '&:hover': {
            backgroundColor: "#EC2525",
        },
    },
});
