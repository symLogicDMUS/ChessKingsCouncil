import {makeStyles} from "@material-ui/core/styles";
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {fontSize0015, fontSize0016, fontSize002} from "../styles/fontSizes.jss";
import {heights, widths} from "../Reuseables/Modals/MuiGrid.jss";
import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 1,
    }),
    flexbox: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '0.5em',
    }),
    content: props => ({
        fontSize: fontSize002,
        height: '16em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-evenly',
        '@media screen and (min-width: 1040px)': {
            width: '50em',
        },
        '@media screen and (max-width: 1040px)': {
            width: '100%',
        },
    }),
    title_box: props => ({
        display: 'inline-flex',
        alignItems: 'center',
        transform: 'translate(0, 1.4em)'
    }),
    title: props => ({
        fontSize: '2em',
        lineHeight: '0.7em',
        marginRight: '0.25em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    title_icon: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize0016,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize0015,
        },
        height: '3em',
        width: '3em',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
    }),
    img_grid_root: props => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: '-45vw',
        marginTop: '-37.665vh',
    }),
    search_box: props => ({
        '@media screen and (max-width: 1040px)': {
            marginTop: '-0.5em', marginBottom: '0.75em',
            transform: 'translate(0, 13px)',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        '@media screen and (min-width: 1040px)': {
            alignSelf: 'flex-end',
            marginRight: '2.25vw',
            transform: 'translate(0, -1em)'
        },
    }),
}, {index: 1});