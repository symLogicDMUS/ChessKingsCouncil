import makeStyles from "@material-ui/core/styles/makeStyles";
import {getTextWidth} from "../../helpers/getTextWidth.jss";
import {fontSizes} from "../NewGame.jss";

export const useStyles = makeStyles({
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: '100%',
            lineHeight: '1.5em',
        },
        fontFamily: 'Garamond',
        width: getTextWidth(props.text, props.fontSize, 'Garamond'),
        textAlign: 'center',
    }),
});
