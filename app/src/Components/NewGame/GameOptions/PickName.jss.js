import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSizes} from "./GameOptions.jss";
import {getTextWidth} from "../../helpers/getTextWidth.jss";

export const useStyles = makeStyles({
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            width: getTextWidth('Game Name', fontSizes.mobile, 'Garamond'),
        },
        fontFamily: 'Garamond',
        lineHeight: '1em',
    }),
});