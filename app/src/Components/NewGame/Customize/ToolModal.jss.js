import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    window: props => ({
        zIndex: 6,
        padding: '0.1rem',
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.065rem solid ${themes[props.theme].odd_row}`,
        margin: 'auto',
    }),
    top_area: props => ({
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    }),
    close_button: props => ({
        padding: '0.2rem',
    }),
    icon: props => ({
        '@media screen and (max-width: 460px)': {
            width: '0.75rem',
            height: '0.75rem',
        },
        '@media screen and (min-width: 460px)': {
            height: '2.25vw',
            width: '2.25vw',
        },
    }),
    drag_icon: props => ({
        color: themes[props.theme].text_alt,
        cursor: 'move',
    }),
    close_icon: props => ({
        color: themes[props.theme].text,
    }),
}, {index: 1});