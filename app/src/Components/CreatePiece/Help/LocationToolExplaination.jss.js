import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    sub_title: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
        width: '100%',
    }),
    flexbox: props => ({
        width: '95%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed red',
    }),
    locations_board: props => ({
        width: '30vw',
        height: '30vw',
        float: 'left',
        marginRight: '1.2rem',
        marginTop: '0.5rem',
    }),
    location_buttons: props => ({
        float: 'left',
        marginRight: '0.75rem',
        marginTop: '0.5rem',
    }),
    d4: props => ({
        marginRight: '0.25rem',
    }),
    d5: props => ({
        marginLeft: '0.25rem',
        marginRight: '0.25rem',
    }),
    e4: props => ({
        marginLeft: '0.25rem',
        marginRight: '0.25rem',
    }),
    e5: props => ({
        marginLeft: '0.25rem'
    }),
    location_button: props => ({
        borderRadius: '0.1rem',
        width: '3.5rem',
        height: '3.5rem',
        background: themes[props.theme].button_fill,
        border: `0.04em solid ${themes[props.theme].outline}`,
    }),
}, {index: 1});