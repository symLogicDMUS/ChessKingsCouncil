import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const button = (fontSize, theme) => ({
    fontSize: fontSize,
    color: themes[theme].text,
    // border: `0.05em solid ${themes[theme].outline}`
});

export const useStyles = makeStyles({
    modal: {
        ...modal
    },
    dialog_window: props => ({
        width: '27%',
        height: '27%',
        backgroundColor: themes[props.theme].modal_fill,
    }),
    title: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
    }),
    dialog_actions: props => ({
        fontSize: props.fontSize,
        width: '22em',
        marginLeft: '1.5em'
    }),
});