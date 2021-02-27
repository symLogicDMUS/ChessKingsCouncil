import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {button} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    button_normal: (props) => ({
        ...button(props.theme),
        background: themes[props.theme].button_fill,
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
    button_selected: (props) => ({
        ...button(props.theme),
        background: themes[props.theme].location_button_selected,
        '&:hover': {
            background: themes[props.theme].location_button_selected,
        },
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
}, {index: 1});