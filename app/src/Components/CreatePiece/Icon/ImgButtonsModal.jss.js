import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";

export const close_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '2em',
    height: '2em',
});

export const button = (fontSize) => ({
    fontSize: fontSize * 0.8,
    width: '7.5em',
    height: '2.5em',
});

export const useStyles = makeStyles({

    modal: props => ({
       ...modal,
        zIndex: 2,
    }),

    window: props => ({
        zIndex: 2,
        fontSize: props.fontSize,
        width: '15em',
        height: '6em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
        borderRadius: '0.25em',
    }),

    top_flexbox: props => ({
        fontSize: props.fontSize,
        width: '100%',
        height: '2em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }),

    button_group: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }),
});