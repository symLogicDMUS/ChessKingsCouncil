import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";
import {z} from "../Reuseables/Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    button: props => ({
        zIndex: z + 1,
        color: themes[props.theme].text,
        "& .MuiButton-label": {
            fontSize: '1rem'
        },
        '@media screen and (min-width: 600px)': {
            marginLeft: '1rem',
        },
    }),
    with_neighbor: props => ({
        zIndex: z + 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
}, {index: 1});