import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    modal: props => ({
        fontSize: props.fontSize,
        ...modal,
        zIndex: 10,
    }),
    window: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 768px)': {
            width: '60%',
            height: '60%',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            height: availHeight(),
        },
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
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    }),
    content: props => ({
        fontSize: props.fontSize,
        width: '98%',
        '@media screen and (min-width: 768px)': {
            height: '20em',
        },
        '@media screen and (max-width: 767px)': {
            height: '41em',
            borderTop: themes[props.theme].text,
        },
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