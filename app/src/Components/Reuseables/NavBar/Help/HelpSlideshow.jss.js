import {button} from "../../Modals/StandardModal.jss";
import {modal} from "../../../helpers/modal.jss";
import {themes} from "../../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../../../styles/fontSizes.jss";
import {appBarHeight} from "../../Drawers/PersistentDrawer.jss";
import {viewHeight, viewWidth} from "../../../helpers/windowMeasurments";

const windowHeightthin = () => (viewHeight() - appBarHeight);

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
        '@media screen and (max-width: 960px)': {
            width: '100%',
            height: windowHeightthin(),
            marginTop: 'auto',
        },
        '@media screen and (min-width: 960px)': {
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
        fontSize: '1.5vw',
        borderRadius: '0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (max-width: 960px)': {
            width: '95vw',
            height: windowHeightthin()*0.655,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 0,
        },
        '@media screen and (min-width: 960px)': {
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
        fontSize: '1.5vw',
        /*media query for phones (generalized)*/
        '@media screen and (max-width: 960px)': {
            height: windowHeightthin()*0.1,
        },
    }),
    button: props => ({
        fontSize: fontSize002,
        width: '7.5em',
        height: '2em',
    }),
    previous_button: props => ({
        marginRight: '0.5em',
        marginTop: '-0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    next_button: props => ({
        marginLeft: '0.5em',
        marginTop: '-0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    done_button: props => ({
        marginLeft: '1em',
        marginTop: '-0.25em',
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    button_icon: props => ({
        fontSize: '1.5vw',
    }),
}, {index: 1});