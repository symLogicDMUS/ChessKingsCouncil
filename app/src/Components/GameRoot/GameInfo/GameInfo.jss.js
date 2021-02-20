import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {
    fontSize002,
    fontSize0024,
    fontSize00301
} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {boardSizes} from "../../Reuseables/Board.jss";

export const cell = (theme) => ({
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
        fontSize: fontSize002,
    },
    '@media (max-aspect-ratio: 1/1)': {
        fontSize: fontSize0024,
    },
    height: '1.5em',
    color: themes[theme].text,
    fontFamily: 'Roboto-Light, Roboto',
});

export const useStyles = makeStyles({
    game_info: props => ({
        fontSize: fontSize002,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            width: drawerItemWidth,
            marginBottom: '1em',
            marginLeft: '1em',
            alignItems: 'flex-end',
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: '7.5em',
            alignItems: 'center',
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderBottom: `0.05em solid ${themes[props.theme].outline}`,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            height: boardSizes.short*0.625,
            width: '24vw',
            position: 'relative',
            left: '-3.5vw',
            marginTop: '-5vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 'unset',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            marginTop: '-1.5vh',
            borderTop: `0.085em solid ${themes[props.theme].outline}`,
            borderBottom: `0.085em solid ${themes[props.theme].outline}`,
        },
    }),
    cell1: props => ({
        ...cell(props.theme),
        '@media (max-aspect-ratio: 1/1)': {
            width: '35%',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize00301,
            width: '23vw',
            textAlign: 'center',
            backgroundColor: themes[props.theme].odd_row,
        },
    }),
    cell2: props => ({
        ...cell(props.theme),
        '@media (max-aspect-ratio: 1/1)': {
            width: '65%',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize00301,
            width: '23vw',
            marginTop: '-2em',
            textAlign: 'center',
        },
    }),
});