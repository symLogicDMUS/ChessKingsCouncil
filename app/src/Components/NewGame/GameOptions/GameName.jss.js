import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSizes} from "../NewGame.jss";

export const textFieldStyle = (fontSize) => ({
    text: {
        normal: {
            fontSize: fontSize,
            height: '1em'
        },
        hover: {
            fontSize: fontSize,
            height: '1em'
        },
        focused: {
            fontSize: fontSize,
            height: '1em'

        },
    },
    root: {
        normal: {
            fontSize: fontSize,
            height: '1em'
        },
        hover: {
            fontSize: fontSize,
            height: '1em'
        },
        focused: {
            fontSize: fontSize,
            height: '1em'

        },
    }
})

export const useStyles = makeStyles({
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: '100%',
            textAlign: 'center'
        },
        "@media (aspect-ratio: 375/812)": {
            fontSize: fontSizes.ipx,
            width: '100%',
            textAlign: 'center'
        },
        fontFamily: 'Garamond',
        lineHeight: '1em',
    }),
});