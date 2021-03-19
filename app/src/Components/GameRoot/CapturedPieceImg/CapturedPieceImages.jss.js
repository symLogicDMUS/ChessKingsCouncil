import {themes} from "../../styles/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import {boardSizes} from "../../Reuseables/Board/Board.jss";
import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {availHeight, viewWidth} from "../../helpers/windowMeasurments";
import {fontSize00175, fontSize002, fontSize0023} from "../../styles/fontSizes.jss";

export const whiteList = () => {
    if (viewWidth() <= 1040) {
        return {marginBottom: '8%'}
    }
    else {
        return {marginBottom: '5%'}
    }
};

export const useStyles = makeStyles({
    captured_piece_images: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }),
    outlined_box: props => ({
        fontSize: fontSize00175,
        border: `0.05em solid ${themes[props.theme].outline}`,
        borderRadius: '0.25em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-width: 1040px)': {
            width: boardSizes.mobile * 0.9,
        },
        '@media screen and (min-width: 1040px)': {
            width: drawerItemWidth,
            marginLeft: '5%',
        },
    }),
    label: props => ({
        fontSize: '0.95em',
        lineHeight: '1em',
        paddingLeft: '0.3em',
        paddingRight: '0.3em',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill2,
        transform: 'translate(0.65em, -0.65em)',
    }),
    piece_list: props => ({
        flexGrow: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 1040px)': {
            width: boardSizes.mobile * 0.85,
            marginLeft: boardSizes.mobile * 0.025,
            transform: 'translate(0, -0.5em)',
        },
        '@media screen and (min-width: 1040px)': {
            width: drawerItemWidth,
            fontSize: fontSize00175,
            transform: 'translate(0, -0.5em)',
        },
    }),
    empty_list: props => ({
        '@media screen and (max-width: 1040px)': {
            width: boardSizes.mobile * 0.9,
            fontSize: fontSize0023,
            height: '1.5em',
        },
        '@media screen and (min-width: 1040px)': {
            width: drawerItemWidth,
            fontSize: fontSize00175,
            height: '1.5em',
            transform: 'translate(0, -0.5em)',
        },
    }),
    piece: props => ({
        fontSize: fontSize002,
        height: '1.5em',
        marginLeft: '0.2em',
        marginTop: '0.2em',
    }),
    title: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: availHeight() * 0.018,
            width: drawerItemWidth,
            marginLeft: '5%',
            marginBottom: '5%',
            lineHeight: '1em',
            color: themes[props.theme].text,
            fontFamily: 'Roboto-Light, Roboto',
        },
    }),
}, {index: 1});