import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    link: props => ({
       color: themes[props.theme].sqr_hover_alt,
    }),
}, {index: 1});