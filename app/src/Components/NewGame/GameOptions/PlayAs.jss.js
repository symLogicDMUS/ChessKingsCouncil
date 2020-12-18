import makeStyles from "@material-ui/core/styles/makeStyles";
import {getTextWidth} from "../../helpers/getTextWidth.jss";

export const dropdownStyle = (fontSize) => ({
    fontSize: fontSize,
    width: '18em',
});

export const useStyles = makeStyles({
    title: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Garamond',
        width: getTextWidth(props.text, props.fontSize, 'Garamond'),
    }),
});
