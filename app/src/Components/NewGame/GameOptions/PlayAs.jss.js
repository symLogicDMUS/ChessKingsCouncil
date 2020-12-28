import makeStyles from "@material-ui/core/styles/makeStyles";
import {getTextWidth} from "../../helpers/getTextWidth.jss";

export const dropdownStyle = (fontSize) => ({
    fontSize: fontSize,
    width: '18em',
});

export const useStyles = makeStyles({
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: props.fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 0.85,
            width: '100%',
            lineHeight: '1.5em',
        },
        fontFamily: 'Garamond',
        width: getTextWidth(props.text, props.fontSize, 'Garamond'),
        textAlign: 'center',
    }),
});
