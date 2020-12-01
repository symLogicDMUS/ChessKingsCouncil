import { makeStyles } from "@material-ui/core/styles";
import { modal } from "../../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: {
        ...modal,
    },
    top_bar: {
        position: 'absolute',
        zIndex: 'inherit',
        backgroundColor: '#515151',
        borderBottom: '0.8px solid #707070',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        position: "absolute",
        color: "#a9a9a9",
        border: "1px dashed #b1faae",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left",
        paddingLeft: "1%",
        paddingTop: "0.25%",
    },
});
