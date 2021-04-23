import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    root: props => ({
        "& .MuiDrawer-root": {
            zIndex: 12,
        },
        "& .MuiDrawer-paper": {
            width: 200,
            zIndex: 12,
            backgroundColor: themes[props.theme].fill,
            outline: `0.05rem solid ${themes[props.theme].outline}`,
        },
    }),
    icon: props => ({
       color: themes[props.theme].text,
    }),
}, {index: 1});