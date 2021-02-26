import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize001725, fontSize002} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";
import {widths} from "./ImgGrid.jss";

export const img_container = (theme, isSelected) => ({
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontSize002,
    borderRadius: '0.3em',
    backgroundColor: isSelected ? themes[theme].odd_row : themes[theme].even_row,
    '@media screen and (max-device-width: 1040px)': {
        width: ((widths.mobile * 0.95 * 0.95) - (widths.mobile * 0.95 * 0.95 * 0.025 * 4))*0.5,
        height: ((widths.mobile * 0.95 * 0.95) - (widths.mobile * 0.95 * 0.95 * 0.025 * 4))*0.5,
        border: isSelected ? `0.0025em solid ${themes[theme].text_alt}` : `0.0025em solid ${themes[theme].outline}`,
    },
    '@media screen and (min-device-width: 1040px)': {
        width: ((widths.desktop * 0.95 * 0.95) - (widths.desktop * 0.95 * 0.95 * 0.025 * 4))*0.2,
        height: ((widths.desktop * 0.95 * 0.95) - (widths.desktop * 0.95 * 0.95 * 0.025 * 4))*0.2,
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
        '@media screen and (max-device-width: 1040px)': {
            margin: widths.mobile * 0.95 * 0.95 * 0.025,
            width: ((widths.mobile * 0.95 * 0.95) - (widths.mobile * 0.95 * 0.95 * 0.025 * 4))*0.5,
        },
        '@media screen and (min-device-width: 1040px)': {
            margin: widths.desktop * 0.95 * 0.95 * 0.025,
            width: ((widths.desktop * 0.95 * 0.95) - (widths.desktop * 0.95 * 0.95 * 0.025 * 4))*0.2,
        },
    }),
    normal: props => ({
        ...img_container(props.theme, false),
    }),
    selected: props => ({
        ...img_container(props.theme, true),
    }),
    img: props => ({
        width: '95%',
        height: '95%',
        // '@media screen and (max-device-width: 1040px)': {
        //     width: '95%',
        //     height: '95%',
        // },
        // '@media screen and (min-device-width: 1040px)': {
        //     fontSize: fontSize002,
        //     width: '9em',
        //     height: '9em',
        // },
    }),
    img_name: props => ({
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        fontSize: fontSize002,
        width: '99%',
        // '@media screen and (max-device-width: 1040px)': {
        //     fontSize: fontSize002,
        //     width: '99%',
        // },
        // '@media screen and (min-device-width: 1040px)': {
        //     fontSize: fontSize002,
        //     width: '10em',
        //     position: 'relative',
        //     top: '-1em',
        // },
    }),
    tooltip: props => ({
        fontSize: fontSize001725
    }),
}, {index: 1});
