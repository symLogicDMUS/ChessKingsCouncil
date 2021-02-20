import {button} from "../StandardModal.jss";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth, innerHeight} from "../../helpers/windowMeasurments";
import {fontSize002} from "../../styles/fontSizes.jss";
import {appBarHeight} from "../PersistentDrawer.jss";

const windowHeightMobile = () => (innerHeight() - appBarHeight);

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
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            width: availWidth() * 0.66667,
            height: availHeight() * 0.66667,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: windowHeightMobile(),
            marginTop: appBarHeight,
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
        /*media query for phones (generalized)*/
        '@media screen and (max-aspect-ratio: 1/1) and (max-device-width: 992px)': {
            height: windowHeightMobile()*0.15,
        },
    }),
    x_symbol_flexbox: props => ({
        width: '100%',
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '@media screen and (max-aspect-ratio: 1/1) and (max-device-width: 992px)': {
            height: windowHeightMobile()*0.05,
        },
    }),
    title_flexbox: props => ({
        width: '95%',
        fontSize: fontSize002,
        margin: 'auto',
        marginBottom: '1vh',
        alignSelf: 'flex-end',
        /*media query for phones (generalized)*/
        '@media screen and (max-aspect-ratio: 1/1) and (max-device-width: 992px)': {
            height: windowHeightMobile()*0.1,
        },
    }),
    content: props => ({
        overflow: 'scroll',
        fontSize: fontSize002,
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media (max-aspect-ratio: 1/1)': {
            width: '95vw',
            height: windowHeightMobile()*0.75,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 0,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            width: availWidth() * 0.66667*0.95,
            height: availHeight() * 0.66667*0.95*0.79,
            marginLeft: '2.5%',
        },
    }),
    buttons: props => ({
        width: '95%',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fontSize002,
        /*media query for phones (generalized)*/
        '@media screen and (max-aspect-ratio: 1/1) and (max-device-width: 992px)': {
            height: windowHeightMobile()*0.1,
        },
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