import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";

export const close_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '2em',
    height: '2em',
});

export const useStyles = makeStyles({

    modal: props => ({
       ...modal
    }),

    window: props => ({
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

    button: (props) => ({
        fontSize: props.fontSize * 0.8,
        background: themes[props.theme].button_fill,
        color: themes[props.theme].button_text,
        width: '7.5em',
        height: '2.5em',
    }),

});

// button_group: (props) => ({
//     display: 'flex',
//     flexDirection: 'row',
//     fontSize: props.fontSize,
//     justifyContent: 'space-between',
//     height: '5em',
// }),