import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const topIconSize = 12;
export const topIconMargin = 2;

export const useStyles = makeStyles({
    top_area: props => ({
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    }),
    icon: props => ({
        width: topIconSize,
        height: topIconSize,
        margin: topIconMargin,
    }),
    drag_icon: props => ({
        color: themes[props.theme].text_alt,
        cursor: 'move',
    }),
    close_icon: props => ({
        color: themes[props.theme].text,
        cursor: 'pointer',
    }),
}, {index: 1});