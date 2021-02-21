import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../../styles/themes.jss";
import {fontSizes} from "../Range.jss";


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
        fontSize: fontSizes.ipx,
    },
    '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)': {
        fontSize: fontSizes.mobile,
    },
    /*shortest phones*/
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
        fontSize: fontSizes.mobile,
    },
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
        fontSize: fontSizes.ipad,
    },
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
        fontSize: fontSizes.desktop,
    },
    width: '2.75em',
    height: '2.75em',
    borderRadius: '0.2em',
    border: `0.05em solid ${themes[theme].outline}`,
    ...buttonPos[angle],
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
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
            fontSize: fontSizes.ipx,
            width: '2.75em',
            height: '2.75em',
        },
        '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: '2.75em',
            height: '2.75em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            width: '2.75em',
            height: '2.75em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizes.mobile,
            width: '2.75em',
            height: '2.75em',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            width: '2.75em',
            height: '2.75em',
        },
        color: themes[props.theme].text,
    }),

    vector: (props) => ({
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            width: '2em',
            height: '2em',
        },
        '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: '2em',
            height: '2em',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizes.mobile,
            width: '2em',
            height: '2em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            width: '2em',
            height: '2em',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            width: '2em',
            height: '2em',
        },
        color: themes[props.theme].text,
    }),
});
