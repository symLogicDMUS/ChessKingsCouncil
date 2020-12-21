import makeStyles from "@material-ui/core/styles/makeStyles";
import {text} from "../../PieceProfiles/Header/PieceHeader.jss"
import {themes} from "../../styles/themes.jss";
import {drawer_component, list_title} from "./Customize.jss";

export const piece_label = (fontSize, theme) => ({
    width: '25%',
    height: '2em',
    textAlign: 'center',
    ...text(fontSize, theme),
    borderRight: `0.08em solid ${themes[theme].outline}`,
});

export const piece_value = (fontSize, theme) => ({
    width: '75%',
    height: '2em',
    ...text(fontSize, theme),
});

export const useStyles = makeStyles({
    sub_list: props =>  ({
        ...drawer_component(props.fontSize),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    header: props => ({
        width: '100%',
        ...list_title(props.fontSize, props.theme),
        outline: `0.05em solid ${themes[props.theme].outline}`,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
    }),
    piece_label_even: props => ({
        ...piece_label(props.fontSize, props.theme),
        backgroundColor: themes[props.theme].even_row,
    }),
    piece_label_odd: props => ({
        ...piece_label(props.fontSize, props.theme),
        backgroundColor: themes[props.theme].odd_row,
    }),
    piece_value_even: props => ({
        ...piece_value(props.fontSize, props.theme),
        backgroundColor: themes[props.theme].even_row,
    }),
    piece_value_odd: props => ({
        ...piece_value(props.fontSize, props.theme),
        backgroundColor: themes[props.theme].odd_row,
    }),
});