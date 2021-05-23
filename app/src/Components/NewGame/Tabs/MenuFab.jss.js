import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    root: props => ({
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 6,
        display: 'flex',
        alignItems: 'center',
        "& .MuiIconButton-root": {
            marginLeft: 12,
            marginRight: 6,
        },
        "& .MuiSvgIcon-root": {
            color: themes[props.theme].text,
        },
    }),
}, {index: 1});