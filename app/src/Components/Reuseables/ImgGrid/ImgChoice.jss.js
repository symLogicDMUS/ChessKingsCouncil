import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const img_container = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '10em',
    height: '10em',
    margin: '1em',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.25em',
    border: `0.08em solid ${themes[theme].outline}`,
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
        },
        '@media screen and (max-width: 767px)': {
            ...img_container(fontSize002, props.theme),
        },
        "@media (aspect-ratio: 375/812)": {
            ...img_container(fontSize001725, props.theme),

        },
    }),
    selected: props => ({
        '@media screen and (min-width: 768px)': {
            ...img_container(fontSize002, props.theme),
        },
        '@media screen and (max-width: 767px)': {
            ...img_container(fontSize002, props.theme),
        },
        "@media (aspect-ratio: 375/812)": {
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
        "@media (aspect-ratio: 375/812)": {
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
