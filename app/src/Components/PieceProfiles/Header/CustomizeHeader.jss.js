import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {header, text} from "./PieceHeader.jss";

export const flexbox = (fontSize, style) => ({
        ...style,
        fontSize: fontSize,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
});

export const promo_checkbox =  (fontSize) => ({
    fontSize: fontSize*1.5,
    fontFamily: 'Roboto-Light, Roboto',
});

export const sub_dropdown = (fontSize) => ({
    fontSize: fontSize,
    width: '15em',
    flexGrow: 100,
    minHeight: 0,
    marginLeft: '0.35em',
});

export const sub_buttons = (fontSize) => ({
    fontSize: fontSize,
    width: '20em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
    minHeight: 0,
    marginLeft: '0.35em',
});

export const useStyles = makeStyles({

    header: props => ({
       ...header(props.fontSize, props.style, props.theme),
        width: '85%',
        height: '2em',
        marginTop: '0.75em',
        marginBottom: '0.375em',
    }),

    piece_name_container: props => ({
        ...flexbox(props.fontSize, props.style),
        width: '11.5em',
    }),

    /*checkbox and dropdown */
    options_container: props => ({
        ...flexbox(props.fontSize, props.style),
        width: '30em',
    }),

    piece_name: props => ({
        ...text(props.fontSize, props.theme),
    }),

    dropdown_label: props => ({
        ...text(props.fontSize, props.theme),
        marginRight: '2.7em'
    }),
    sub_label: props => ({
       fontSize: '0.5em', //marginTop: '-0.5em',
    }),
    sub_button: props => ({
        fontSize: props.fontSize,
        width: '1.5em',
        height: '1.5em'
    }),
    sub_icon: props => ({
       fontSize: props.fontSize,
       width: '1.75em',
       height: '1.75em'
    }),
});