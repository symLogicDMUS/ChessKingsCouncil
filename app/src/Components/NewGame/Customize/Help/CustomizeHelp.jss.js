import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    icon: props => ({
        display: 'inline-block',
        marginLeft: '0.25rem',
        marginRight: '0.25rem',
        width: '1.2rem',
        height: '1.2rem',
        transform: 'translate(0, 0.1rem)',
        fill: 'none',
    }),
    sub_icon: props => ({
        fill: 'none'
    }),
    block_icon: props => ({
       fill: themes[props.theme].text,
    }),
    see_more_icon: props => ({
        color: themes[props.theme].text,
        transform: 'translate(0, 0.25rem)',
        width: '1.25rem',
        height: '1.25rem',
    }),
}, {index: 1});