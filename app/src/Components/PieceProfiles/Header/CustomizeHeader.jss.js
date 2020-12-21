import {makeStyles} from "@material-ui/core/styles";
import {header, text} from "./PieceHeader.jss";

export const promo_checkbox = (fontSize, theme) => ({
    ...text(fontSize, theme),
});

export const checkbox_root = (fontSize) => ({
    fontSize: fontSize,
    marginLeft: '-0.15em',
});

export const sub_buttons = (fontSize) => ({
    fontSize: fontSize,
    width: '11.55em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
});

export const useStyles = makeStyles({
    header: props => ({
        ...header(props.fontSize, props.style, props.theme),
        justifyContent: 'space-evenly',
        width: '100%',
        height: '2em',
    }),
    header_text: props => ({
        ...text('1.2em', props.theme),
        width: `${11.55 / 1.2}em`,
    }),
    box: props => ({
        fontSize: '1em',
        width: '11.55em',
        // textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
    }),
    sub_button: props => ({
        fontSize: '1em',
        width: '1.5em',
        height: '1.5em'
    }),
    sub_icon: props => ({
        fontSize: '1em',
        width: '1.25em',
        height: '1.25em'
    }),
});