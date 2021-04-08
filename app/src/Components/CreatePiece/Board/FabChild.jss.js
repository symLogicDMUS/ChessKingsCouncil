import {darken, lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    fab: props => ({
        zIndex: 6,
        position: 'relative',
        right: '2.5vw',
        top: '2.5vw',
        width: '5vw',
        height: '5vw',
        padding: '1vw',
        minWidth: 20,
        minHeight: 20,
        marginTop: 'auto',
        marginRight: 'auto',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        '@media screen and (min-width: 960px)': {
            display: 'none',
        },
    }),
    fab_icon: props => ({
        width: '2.5vw',
        height: '2.5vw',
        minWidth: 10,
        minHeight: 10,
    }),
    rangeHoverButton: props => ({
        '&:hover':{
            backgroundColor: themes[props.theme].offset,
        },
    }),
    locHoverButton: props => ({
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].dark_in_range, 0.08),
        },
    }),
    rangeHoverIcon: props => ({
        color: themes[props.theme].span,
    }),
    locHoverIcon: props => ({
        color: lighten(themes[props.theme].sqr_hover_alt, 0.2),
    }),
}, {index: 1});