import {lighten, makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {sqrSize} from "../Board/CreatePieceBoard.jss";
import {fontSize00301} from "../../styles/fontSizes.jss";

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
    sqr_button: props => ({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        width: sqrSize.thin,
        height: sqrSize.thin,
        maxWidth: '11vh',
        maxHeight: '11vh',
        backgroundColor: themes[props.theme].dark_in_range,
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].dark_in_range, 0.08),
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
        color: lighten(themes[props.theme].dark_in_range, 0.5),
    }),
}, {index: 1});