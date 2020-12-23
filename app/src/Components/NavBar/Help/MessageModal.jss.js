import makeStyles from "@material-ui/core/styles/makeStyles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";

export const ok_button = (fontSize, theme) => ({
    fontSize: fontSize,
});

export const close_icon = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '2em',
    height: '2em',
});

export const useStyles = makeStyles({
    modal: props => ({
        fontSize: props.fontSize,
        ...modal,
    }),
    title: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Roboto-Light, Roboto',
        textAlign: 'center',
        width: '95%',
    }),
    window: props => ({
        fontSize: props.fontSize,
        zIndex: 20,
        backgroundColor: themes[props.theme].fill,
    }),
    top_flexbox: props => ({
        fontSize: props.fontSize,
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '2em',
        width: '95%',
    }),
    text: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
    }),
    close: props => ({
        fontSize: props.fontSize,
    }),
});
