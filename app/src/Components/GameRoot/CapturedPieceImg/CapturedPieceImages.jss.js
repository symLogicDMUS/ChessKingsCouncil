import { makeStyles } from "@material-ui/core/styles";
import {fontSize002} from "../../styles/fontSizes.jss";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    captured_piece_img: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }),
    piece_list: props => ({
        flexGrow: 10,
        fontSize: fontSize002,
        marginBottom: '0.75em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        outline: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (min-device-width: 1040px)': {
            width: drawerItemWidth,
            marginLeft: '5%',
        },
        '@media screen and (max-device-width: 1040px)': {
            width: '100%',
        },
    }),
    empty_list: props => ({
        fontSize: fontSize002,
        height: '2em',
        marginBottom: '0.75em',
        outline: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (min-device-width: 1040px)': {
            width: drawerItemWidth,
            marginLeft: '5%',
        },
        '@media screen and (max-device-width: 1040px)': {
            width: '100%',
        },
    }),
    piece: props => ({
        fontSize: fontSize002,
        height: '2em',
        marginLeft: '0.2em',
    }),
}, {index: 1});