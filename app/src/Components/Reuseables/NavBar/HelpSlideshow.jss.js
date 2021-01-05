import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        fontSize: props.fontSize,
        ...modal,
        zIndex: 10,
    }),
    window: props => ({
        fontSize: props.fontSize,
        width: '60%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
        backgroundColor: themes[props.theme].fill,
    }),
    top_flexbox: props => ({
        fontSize: props.fontSize,
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    content: props => ({
        fontSize: props.fontSize,
        width: '98%',
        height: '20em',
        overflow: 'scroll',
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    buttons: props => ({
        width: '98%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
    }),
});