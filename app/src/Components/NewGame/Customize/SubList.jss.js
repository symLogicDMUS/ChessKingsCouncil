import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {drawerItemMarginLeft, drawerItemMarginTopBottom, drawerItemWidth} from "./Customize.jss";
import {fontSizes} from "../../PieceProfiles/PieceProfiles.jss";
import {fontSize0023, fontSize004025} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    sub_list: props => ({
        '@media screen and (max-width: 1040px)': {
            marginTop: '-2vh',
            fontFamily: 'Roboto-Light, Roboto',
            width: '100%'
        },
        '@media screen and (min-width: 1040px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: drawerItemMarginTopBottom,
            fontFamily: 'Roboto-Light, Roboto',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    header: props => ({
        width: '100%',
        textAlign: 'center',
        outline: `0.05em solid ${themes[props.theme].outline}`,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
    }),
    piece_label: props => ({
        fontSize: fontSize004025,
        width: '25%',
        height: '1em',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        borderRight: `0.08em solid ${themes[props.theme].outline}`,
    }),
    piece_value: props => ({
        fontSize: fontSize004025,
        width: '75%',
        height: '1em',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '0.5em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
    even_row: props => ({
        backgroundColor: themes[props.theme].even_row,
    }),
    odd_row: props => ({
        backgroundColor: themes[props.theme].odd_row,
    }),
    text: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSize0023,
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
        },
        fontFamily: 'Roboto-Light, Roboto',
    }),
}, {index: 1});