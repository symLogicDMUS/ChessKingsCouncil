import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSizes} from "./SpanArrowButtons.jss";
import {themes} from "../../../styles/themes.jss";


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
    '@media screen and (min-width: 768px)': {
        fontSize: fontSizes.desktop,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSizes.mobile,
    },
    "@media (max-aspect-ratio: 1/2)": {
        fontSize: fontSizes.ipx,
    },
    ...buttonPos[angle],
    width: '2.75em',
    height: '2.75em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.2em',
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
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,

        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
        },
        width: '2.75em',
        height: '2.75em',
        color: themes[props.theme].text,
    }),

    vector: (props) => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,

        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
        },
        width: '2em',
        height: '2em',
        color: themes[props.theme].text,
    }),
});
