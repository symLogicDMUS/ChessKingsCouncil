import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002, fontSizeW090, fontSizeW0992} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const img_container = (theme, isSelected) => ({
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isSelected ? themes[theme].odd_row : themes[theme].even_row,
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize002,
        width: '10em',
        height: '10em',
        margin: '1em',
        borderRadius: '0.25em',
        border: isSelected ? `0.08em solid ${themes[theme].text_alt}` : `0.08em solid ${themes[theme].outline}`,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSizeW0992,
        width: '0.38em',
        height: '0.38em',
        margin: '0.025em',
        borderRadius: '0.015em',
        border: isSelected ? `0.0025em solid ${themes[theme].text_alt}` : `0.0025em solid ${themes[theme].outline}`,
    },
    '@media (max-aspect-ratio: 280/653)': {
        fontSize: fontSizeW0992,
        width: '0.37em',
        height: '0.37em',
        margin: '0.025em',
        borderRadius: '0.015em',
        border: isSelected ? `0.0025em solid ${themes[theme].text_alt}` : `0.0025em solid ${themes[theme].outline}`,
    },
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
        ...img_container(props.theme, false),
    }),
    selected: props => ({
        ...img_container(props.theme, true),
    }),
    img: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
            width: '9em',
            height: '9em',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizeW0992,
            width: '0.361em',
            height: '0.361em',
        },
        '@media (max-aspect-ratio: 280/653)': {
            fontSize: fontSizeW0992,
            width: '0.35em',
            height: '0.35em',
        }
    }),
    img_name: props => ({
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize002,
            width: '10em',
            position: 'relative',
            top: '-0.45em',
        },
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
            width: '10em',
            position: 'relative',
            top: '-1em',
        },
        '@media (max-aspect-ratio: 280/653)': {
            fontSize: fontSize001725,
            width: '9em',
        },
    }),
    tooltip: props => ({
        fontSize: fontSize001725
    }),
});
