import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes/themes.jss";
import {lighten} from "@material-ui/core/styles";
import {appBarHeight} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        '@media screen and (max-width: 960px)': {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: appBarHeight*0.5,
            boxShadow: `0 0 1rem ${lighten(themes[props.theme].switch_active, 0.2)}`,
        },
        '@media screen and (min-width: 960px)': {
            outline: `0.04em solid ${themes[props.theme].outline}`
        },
    }),
}, {index: 1})