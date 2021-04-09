import {lighten, makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {sqrSize} from "../Board/CreatePieceBoard.jss";
import {fontSize00301} from "../../styles/fontSizes.jss";

export const frame = (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: themes[theme].dark_in_range,
    padding: 0,
});

export const useStyles = makeStyles({
    button: props => ({
        color: themes[props.theme].text,
    }),
    button_normal: (props) => ({
        background: themes[props.theme].fill,
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
    button_selected: (props) => ({
        background: themes[props.theme].location_button_selected,
        '&:hover': {
            background: themes[props.theme].location_button_selected,
        },
    }),
    text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3vw',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '3.5vw',
        },
        margin: 'auto',
        color: lighten(themes[props.theme].sqr_hover_alt, 0.6),
    }),
}, {index: 1});