import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../../styles/themes.jss";
import {twoItemFontSizes} from "../../CreatePiece.jss";

const buttonPos = {
    "135d": {gridRow: 1, gridColumn: 1},
    "90d": {gridRow: 1, gridColumn: 2},
    "45d": {gridRow: 1, gridColumn: 3},
    "180d": {gridRow: 2, gridColumn: 1},
    "0d": {gridRow: 2, gridColumn: 3},
    "225d": {gridRow: 3, gridColumn: 1},
    "270d": {gridRow: 3, gridColumn: 2},
    "315d": {gridRow: 3, gridColumn: 3},
};

const container = (angle, theme) => ({
    "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
        fontSize: twoItemFontSizes.ipx,
    },
    '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1)': {
        fontSize: twoItemFontSizes.mobile,
    },
    /*shortest phones*/
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
        fontSize: twoItemFontSizes.mobile,
    },
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
        fontSize: twoItemFontSizes.ipad,
    },
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
        fontSize: twoItemFontSizes.desktop,
    },
    ...buttonPos[angle],
    width: '2.75em',
    height: '2.75em',
    borderRadius: '0.2em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    border: `0.05em solid ${themes[theme].outline}`,
})

export const useStyles = makeStyles({
    container_normal: props => ({
        ...container(props.angle, props.theme),
        backgroundColor: '#414141',
        '&:hover': {
            backgroundColor: '#707070'
        },
    }),
    container_selected: props => ({
        ...container(props.angle, props.theme),
        backgroundColor: '#ec2525',
        '&:hover': {
            backgroundColor: '#ec2525'
        },
    }),
    arrow_button: props => ({
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: twoItemFontSizes.ipx,
            width: '2.75em',
            height: '2.75em',
        },
        '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1)': {
            fontSize: twoItemFontSizes.mobile,
            width: '2.75em',
            height: '2.75em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: twoItemFontSizes.ipad,
            width: '2.75em',
            height: '2.75em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: twoItemFontSizes.mobile,
            width: '2.75em',
            height: '2.75em',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: twoItemFontSizes.desktop,
            width: '2.75em',
            height: '2.75em',
        },
        color: themes[props.theme].text,
    }),

    vector: (props) => ({
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: twoItemFontSizes.ipx,
            width: '2em',
            height: '2em',
        },
        '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1)': {
            fontSize: twoItemFontSizes.mobile,
            width: '2em',
            height: '2em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: twoItemFontSizes.mobile,
            width: '2em',
            height: '2em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: twoItemFontSizes.ipad,
            width: '2em',
            height: '2em',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: twoItemFontSizes.desktop,
            width: '2em',
            height: '2em',
        },
        color: themes[props.theme].text,
    }),
});
