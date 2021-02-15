import {button} from "../StandardModal.jss";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        fontSize: fontSize002,
        ...modal,
        zIndex: 10,
    }),
    window: props => ({
        fontSize: fontSize002,
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media (min-aspect-ratio: 1001/1000)': {
            width: availWidth() * 0.66667,
            height: availHeight() * 0.66667,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: availHeight()*0.9,
            border: '1px dashed red',
        },
    }),
    top_flexbox: props => ({
        fontSize: fontSize002,
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
        width: '95%',
        fontSize: fontSize002,
        margin: 'auto',
        // marginTop: '1vh',
        marginBottom: '1vh',
        alignSelf: 'flex-end',
    }),
    content: props => ({
        overflow: 'scroll',
        fontSize: fontSize002,
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media (max-aspect-ratio: 1/1)': {
            width: '95vw',
            height: '80vh',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: availWidth() * 0.66667*0.95,
            height: availHeight() * 0.66667*0.95*0.79,
            marginLeft: '2.5%',
        },
    }),
    buttons: props => ({
        width: '95%',
        display: 'flex',
        margin: 'auto',
        position: 'relative',
        top: '0.6vh',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fontSize002,
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