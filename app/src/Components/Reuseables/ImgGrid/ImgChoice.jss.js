import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002, fontSizeW095, fontSizeW0992} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const img_container = (fontSize, theme) => ({
    fontSize: fontSize,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes[theme].fill,
});

export const useStyles = makeStyles({
    img_choice: props => ({
       display: 'flex',
       flexDirection: 'column',
       flexWrap: 'nowrap',
       alignItems: 'center',
       justifyContent: 'center',
    }),
    normal: props => ({
        '@media screen and (min-width: 768px)': {
            ...img_container(fontSize002, props.theme),
            width: '10em',
            height: '10em',
            margin: '1em',
            borderRadius: '0.25em',
            border: `0.08em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (max-width: 767px)': {
            ...img_container(fontSizeW0992, props.theme),
            width: '0.4em',
            height: '0.4em',
            margin: '0.025em',
            borderRadius: '0.015em',
            border: `0.0025em solid ${themes[props.theme].outline}`,
        },
    }),
    selected: props => ({
        '@media screen and (min-width: 768px)': {
            ...img_container(fontSize002, props.theme),
        },
        '@media screen and (max-width: 767px)': {
            ...img_container(fontSize002, props.theme),
        },
        "@media (max-aspect-ratio: 1/2)": {
            ...img_container(fontSize001725, props.theme),

        },
        boxShadow: "0 0 0.5em white",
    }),
    img: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize002,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSize001725,
        },
        width: '9em',
        height: '9em',
    }),
    img_name: props => ({
        fontSize: fontSize002,
        width: '10em',
        position: 'relative',
        top: '-1em',
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
    tooltip: props => ({
        fontSize: fontSize001725
    }),
});
