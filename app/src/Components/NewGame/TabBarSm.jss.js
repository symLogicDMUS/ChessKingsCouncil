import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const useStyles = makeStyles({
    root: props => ({
        "& .MuiToolbar-root": {
            backgroundColor: themes[props.theme].fill,
        },
        "& .MuiSvgIcon-root": {
            color: themes[props.theme].text,
        },
        "& .MuiTypography-root": {
            color: themes[props.theme].text,
        },
    }),
}, {index: 1});