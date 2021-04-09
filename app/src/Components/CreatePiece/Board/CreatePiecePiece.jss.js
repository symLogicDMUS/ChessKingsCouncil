import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {imgFillDiv} from "../../styles/imgFillDiv.jss";
import {fontSize00301} from "../../styles/fontSizes.jss";
import {lighten} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    piece: props => ({
        zIndex: 2,
        width: '100%',
        height: '100%',
        margin: 'auto',
        background: 'none',
        fontSize: fontSize00301,
    }),
    img: props => ({
        zIndex: 2,
        ...imgFillDiv,
        margin: 'auto',
    }),
    light_sqr_text: props => ({
        color: themes[props.theme].sqr_text_light,
    }),
    dark_sqr_text: props => ({
        color: themes[props.theme].sqr_text_dark,
    }),
    rf_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3vw',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '3.5vw',
        },
        color: lighten(themes[props.theme].sqr_hover_alt, 0.2),
    }),
    piece_loc_highlight: props => ({
        color: themes[props.theme].sqr_hover,
    }),
}, {index: 1})
