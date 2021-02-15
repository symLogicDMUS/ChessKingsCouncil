import {drawerItemWidth} from "../../NewGame/Customize/Customize.jss";
import {fontSize002, fontSize0024} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const cell = (theme) => ({
    '@media (min-aspect-ratio: 1001/1000)': {
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
        '@media (min-aspect-ratio: 1001/1000)': {
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
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
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
        '@media (min-aspect-ratio: 1001/1000)': {
            width: '50%',
        },
    }),
    cell2: props => ({
        ...cell(props.theme),
        '@media (max-aspect-ratio: 1/1)': {
            width: '65%',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: '50%',
        },
    }),
});