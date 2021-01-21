import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";


export const useStyles = makeStyles({
    modal: {
        ...modal,
        zIndex: 5,
    },
    window: props => ({
        cursor: 'grab',
        fontSize: props.fontSize,
        width: '8.09em',
        height: '9.5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.04em solid ${themes[props.theme].outline}`
    }),
    top_bar: props => ({
        fontSize: props.fontSize,
        width: '8em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    title: props => ({
        fontSize: props.fontSize * 0.5,
        color: themes[props.theme].text,
        lineHeight: '1.5em',
        paddingLeft: '0.25em',
    }),
    close: props => ({
       width: '1em',
       height: '1em',
       color: themes[props.theme].text,
    }),
})