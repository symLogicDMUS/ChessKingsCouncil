import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    menu: props => ({}),
    seeMore: props => ({
        display: 'flex',
    }),
    icon: props => ({
        color: themes[props.theme].text,
    }),
}, {index: 1});