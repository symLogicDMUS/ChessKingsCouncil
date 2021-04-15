import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {lighten} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        '@media screen and (max-width: 960px)': {
            margin: 'auto',
            boxShadow: `0 0 1rem ${lighten(themes[props.theme].switch_active, 0.2)}`,
        },
        '@media screen and (min-width: 960px)': {
            outline: `0.04em solid ${themes[props.theme].outline}`
        },
    }),
}, {index: 1})