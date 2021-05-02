import {darken, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    window: props => ({
        display: 'flex',
        borderRadius: '0.25rem',
        padding: '1.2rem',
        flexDirection: 'column',
        backgroundColor: themes[props.theme].fill,
        border: `0.075em solid ${themes[props.theme].odd_row}`,
        width: `calc(99.75vw - ${miniVariantIconsColumnWidth}px)`,
        height: '40vh',
    }),
    buttons: props => ({
        width: '100%',
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignContent: 'center',
        justifyContent: 'center',
    }),
    button: props => ({
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill2,
    }),
    yes_button: props => ({
        marginRight: '0.6rem',
    }),
    no_button: props => ({
        marginLeft: '0.6rem',
    }),
}, {index: 1});