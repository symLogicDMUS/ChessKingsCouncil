import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    paragraph: props => ({
        color: themes[props.theme].page_link,
    }),
}, {index: 1});