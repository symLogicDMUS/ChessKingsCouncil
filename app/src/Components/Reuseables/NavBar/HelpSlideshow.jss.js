import {button} from "../StandardModal.jss";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {availHeight} from "../../helpers/windowMeasurments";
import {fontSize002} from "../../styles/fontSizes.jss";

export const previous_button = (theme) => ({
    ...button(fontSize002),
    marginRight: '0.5em',
    border: `0.05em solid ${themes[theme].outline}`,
});

export const next_button = (theme) => ({
    ...button(fontSize002),
    marginLeft: '0.5em',
    border: `0.05em solid ${themes[theme].outline}`,
});

export const done_button = (theme) => ({
    ...button(fontSize002),
    marginLeft: '1em',
    border: `0.05em solid ${themes[theme].outline}`,
});

export const useStyles = makeStyles({
    modal: props => ({
        fontSize: fontSize002,
        ...modal,
        zIndex: 10,
    }),
    window: props => ({
        fontSize: fontSize002,
        '@media screen and (min-width: 768px)': {
            width: '60%',
            height: '64.5%',
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
        position: 'relative',
        top: '-3.5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    }),
    content: props => ({
        fontSize: fontSize002,
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