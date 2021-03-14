import {button} from "../../Modals/StandardModal.jss";
import {modal} from "../../../helpers/modal.jss";
import {themes} from "../../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../../../styles/fontSizes.jss";
import {appBarHeight} from "../../Drawers/PersistentDrawer.jss";
import {viewHeight, viewWidth} from "../../../helpers/windowMeasurments";

const windowHeightMobile = () => (viewHeight() - appBarHeight);

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        fontSize: fontSize002,
        backgroundColor: 'unset',
        flexDirection: 'column',
        zIndex: 10,
    }),
    window: props => ({
        fontSize: fontSize002,
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (max-device-width: 1040px)': {
            width: '100%',
            height: windowHeightMobile(),
            marginTop: 'auto',
        },
        '@media screen and (min-device-width: 1040px)': {
            width: viewWidth() * 0.975,
            height: viewHeight() * 0.975,
            marginTop: 'auto',
            marginBottom: 'auto',
        },
    }),
    top_flexbox: props => ({
        width: '100%',
    }),
    x_symbol_flexbox: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    title_flexbox: props => ({
        width: '95%',
        margin: 'auto',
        marginBottom: '1vh',
    }),
    content: props => ({
        overflow: 'scroll',
        fontSize: fontSize002,
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (max-device-width: 1040px)': {
            width: '95vw',
            height: windowHeightMobile()*0.655,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 0,
        },
        '@media screen and (min-device-width: 1040px)': {
            width: viewWidth() * 0.975*0.95,
            height: viewHeight() * 0.975*0.95*0.85,
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
        '@media screen and (max-device-width: 1040px)': {
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
    button_icon: props => ({
        fontSize: fontSize002,
    }),
}, {index: 1});