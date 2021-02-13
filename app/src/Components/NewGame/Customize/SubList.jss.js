import makeStyles from "@material-ui/core/styles/makeStyles";
import {text} from "../../PieceProfiles/Header/ProfileHeader.jss"
import {themes} from "../../styles/themes.jss";
import {drawer_component, drawerItemMarginLeft, drawerItemMarginTopBottom, drawerItemWidth} from "./Customize.jss";
import {fontSizes} from "../../PieceProfiles/PieceProfiles.jss";
import {fontSize0023} from "../../styles/fontSizes.jss";

export const piece_label = (theme) => ({
    fontSize: fontSize0023,
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

export const piece_value = (theme) => ({
    fontSize: fontSize0023,
    width: '75%',
    height: '1.75em',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '0.5em',
    color: themes[theme].text,
    fontFamily: 'Roboto-Light, Roboto',
});

export const useStyles = makeStyles({
    sub_list: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize0023,
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: drawerItemMarginTopBottom,
            fontFamily: 'Roboto-Light, Roboto',
        },
        '@media (max-aspect-ratio: 1/1)': {
            marginTop: '-2vh',
            fontSize: fontSize0023,
            fontFamily: 'Roboto-Light, Roboto',
            width: '100%'
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
        ...piece_label(props.theme),
        backgroundColor: themes[props.theme].even_row,
    }),
    piece_label_odd: props => ({
        ...piece_label(props.theme),
        backgroundColor: themes[props.theme].odd_row,
    }),
    piece_value_even: props => ({
        ...piece_value(props.theme),
        backgroundColor: themes[props.theme].even_row,
    }),
    piece_value_odd: props => ({
        ...piece_value(props.theme),
        backgroundColor: themes[props.theme].odd_row,
    }),
    text: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0023,
        },
        fontFamily: 'Roboto-Light, Roboto',
    }),
});