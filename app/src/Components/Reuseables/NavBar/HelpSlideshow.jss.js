import {button} from "../StandardModal.jss";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {availHeight} from "../../helpers/windowMeasurments";
import {fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        fontSize: fontSize002,
        ...modal,
        zIndex: 10,
    }),
    window: props => ({
        display: 'grid',
        fontSize: fontSize002,
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (min-width: 768px)': {
            gridTemplateRows: '3.5em 20em 3.5em',
            width: '55em',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            gridTemplateRows: '3.5em 41em 3.5em',
            height: availHeight(),
        },
    }),
    top_flexbox: props => ({
        gridRow: 1,
        fontSize: props.fontSize,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
    }),
    x_symbol_flexbox: props => ({
        width: '100%',
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    title_flexbox: props => ({
        width: '100%',
        alignSelf: 'flex-end'
    }),
    content: props => ({
        fontSize: fontSize002,
        gridRow: 2,
        width: '98%',
        overflow: 'scroll',
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (max-width: 767px)': {
            borderTop: themes[props.theme].text,
        },
        '@media screen and (min-width: 768px)': {
            marginLeft: '0.5em',
            marginRight: '0.5em'
        },
    }),
    buttons: props => ({
        gridRow: 3,
        width: '98%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fontSize002,
        marginLeft: '0.5em',
        marginRight: '0.5em',
        marginTop: '-0.45em',
    }),
    previous_button: props => ({
        ...button(fontSize002),
        marginRight: '0.5em',
        marginTop: '-0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    next_button: props => ({
        ...button(fontSize002),
        marginLeft: '0.5em',
        marginTop: '-0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    done_button: props => ({
        ...button(fontSize002),
        marginLeft: '1em',
        marginTop: '-0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
});