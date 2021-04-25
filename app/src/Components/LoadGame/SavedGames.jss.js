import {makeStyles} from "@material-ui/core/styles";
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {fontSize0015, fontSize0016, fontSize002} from "../styles/fontSizes.jss";
import {heights, widths} from "../Reuseables/Modals/MuiGrid.jss";
import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes/themes.jss";

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
        '@media screen and (min-width: 960px)': {
            width: '50em',
        },
        '@media screen and (max-width: 960px)': {
            width: '100%',
        },
    }),
    title_box: props => ({
        display: 'inline-flex',
        alignItems: 'center',
        transform: 'translate(0, 1.4em)',
    }),
    title: props => ({
        fontWeight: 500,
        lineHeight: 1.6,
        overflow: 'hidden',
        fontSize: '1.08rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
    title_icon: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize0016,
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize0015,
        },
        height: '3em',
        width: '3em',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
    }),
    see_more_icon: props => ({
        color: themes[props.theme].text,
        fontSize: '1.25rem',
    }),
    img_grid_root: props => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: '-45vw',
        marginTop: '-37.665vh',
    }),
    search_box: props => ({
        '@media screen and (min-width: 960px)': {
            alignSelf: 'flex-end',
            marginRight: '2.25vw',
            transform: 'translate(0, -1em)'
        },
    }),
    mui_grid_padding: props => ({
       paddingTop: '3vh',
    }),
}, {index: 1});