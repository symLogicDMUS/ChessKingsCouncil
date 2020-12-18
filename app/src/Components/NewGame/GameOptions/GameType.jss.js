import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    game_type: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Garamond',
        fill: themes[props.theme].fill,
        width: '6.5em',
        height: '6.5em',
        cursor: 'pointer',
    }),
});