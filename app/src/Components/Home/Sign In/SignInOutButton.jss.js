import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {z} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    root: props => ({
        "& .MuiTabScrollButton-root": {
            color: themes[props.theme].text,
            backgroundColor: themes[props.theme].fill,
            opacity: 1,
        },
        "& .MuiTab-root": {
            opacity: 1,
        },
    }),
    button: props => ({
        zIndex: z + 1,
        color: themes[props.theme].text,
        "& .MuiButton-label": {
            fontSize: '1rem'
        },
    }),
    with_neighbor: props => ({
        zIndex: z + 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
    icon: props => ({
       color: themes[props.theme].text,
    }),
}, {index: 1});