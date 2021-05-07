import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const useStyles = makeStyles({
    button: props => ({
        color: themes[props.theme].text,
        "& .MuiButton-label": {
            fontSize: '1rem'
        },
        '@media screen and (min-width: 600px)': {
            marginLeft: '1rem',
        },
    }),
    with_neighbor: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
}, {index: 1});