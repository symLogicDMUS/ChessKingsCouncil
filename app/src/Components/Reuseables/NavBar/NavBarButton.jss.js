import {themes} from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        cursor: 'pointer',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        background: themes[props.theme].fill,
        '&:hover': {
            backgroundColor: themes[props.theme].button_hover_fill,
        },
    }),
    row_direction: props => ({
        fontSize: '1.85vw',
        height: '1.35em',
        flexGrow: 10,
    }),
    column_direction: props => ({
        fontSize: '2.25vh',
        height: '2.75em',
    }),
    icon_and_text_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    }),
    parent_column_text: props => ({
        fontSize: '1em',
    }),
    parent_column_icon: props => ({
        fontSize: '0.7em',
        marginLeft: '0.6em',
        marginRight: '0.5em',
    }),
    icon_lg_column: props => ({
        fontSize: '0.85em',
        marginLeft: '0.5em',
        marginRight: '0.4em',
    }),
    icon_lg_row: props => ({
        fontSize: '0.5em',
        marginLeft: '0.2em',
        marginRight: '0.2em',
    }),
    parent_row_text: props => ({
        fontSize: '0.55em',
        flexGrow: 3,
    }),
    parent_row_icon: props => ({
        fontSize: '0.375em',
        marginRight: '0.5em',
    }),
    alignCenter: props => ({
        alignItems: 'center',
    }),
    alignBaseline: props => ({
        alignItems: 'baseline',
    }),
    text: props => ({
        fontWeight: 100,
        lineHeight: 1.6,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        letterSpacing: '0.008em',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
    color: props => ({
        color: themes[props.theme].text,
    }),
    normal_color: props => ({
        color: themes[props.theme].nav_text,
    }),
    hover_color: props => ({
        color: themes[props.theme].button_hover_text,
    }),
    marginLeft: props => ({
        marginLeft: 'auto',
    }),
    marginRight: props => ({
       marginRight: 'auto',
    }),
    marginTop: props => ({
        marginTop: 'auto',
    }),
    marginBottom: props => ({
       marginBottom: 'auto',
    }),
    margin: props => ({
       margin: 'auto',
    }),
}, {index: 1});