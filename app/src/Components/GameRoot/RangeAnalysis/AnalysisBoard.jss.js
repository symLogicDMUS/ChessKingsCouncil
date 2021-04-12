import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        '@media screen and (max-width: 960px)': {
            margin: 'auto',
        },
        '@media screen and (min-width: 960px)': {
            outline: `0.04em solid ${themes[props.theme].outline}`
        },
    }),
}, {index: 1})