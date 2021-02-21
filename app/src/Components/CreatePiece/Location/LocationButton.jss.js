import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {button} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    button_normal: (props) => ({
        ...button(props.theme),
        background: '#414141',
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
    button_selected: (props) => ({
        ...button(props.theme),
        background: '#4b6eaf',
        '&:hover': {
            background: '#4b6eaf',
        },
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
});