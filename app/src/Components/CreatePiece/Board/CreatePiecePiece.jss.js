import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {imgFillDiv} from "../../styles/imgFillDiv.jss";
import {fontSize00301} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    piece: props => ({
        zIndex: 0,
        width: '100%',
        height: '100%',
        background: 'none',
        fontSize: fontSize00301,
    }),
    img: props => ({
        ...imgFillDiv,
    }),
    light_sqr_text: props => ({
        color: themes[props.theme].sqr_text_light,
    }),
    dark_sqr_text: props => ({
        color: themes[props.theme].sqr_text_dark,
    }),
    rf_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3.25vw',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.5vw',
        },
        color: themes[props.theme].sqr_hover_alt,
    }),
    piece_loc_highlight: props => ({
        color: themes[props.theme].sqr_hover,
    }),
}, {index: 1})
