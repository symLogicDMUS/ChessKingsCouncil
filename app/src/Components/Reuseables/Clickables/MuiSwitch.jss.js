import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    root: props => ({
        "& .MuiFormControlLabel-label": {
            color: themes[props.theme].text,
        },
    }),
}, {index: 1});