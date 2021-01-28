import makeStyles from "@material-ui/core/styles/makeStyles";
import {text} from "../../PieceProfiles/Header/PieceHeader.jss"
import {themes} from "../../styles/themes.jss";
import {drawer_component, list_title} from "./Customize.jss";
import {fontSizes} from "../../PieceProfiles/PieceProfiles.jss";
import {fontSize002, fontSize0023} from "../../styles/fontSizes.jss";

export const piece_label = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '25%',
    height: '1.75em',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: themes[theme].text,
    fontFamily: 'Roboto-Light, Roboto',
    borderRight: `0.08em solid ${themes[theme].outline}`,
});

export const piece_value = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '75%',
    height: '1.75em',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '0.5em'
});

export const useStyles = makeStyles({
    sub_list: props => ({
        ...drawer_component(props.fontSize),
        '@media screen and (max-width: 767px)': {
            height: '7em',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    header: props => ({
        width: '100%',
        ...text(props.theme),
        textAlign: 'center',
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
    text: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize0023,
        },
        fontFamily: 'Roboto-Light, Roboto',
    }),
});