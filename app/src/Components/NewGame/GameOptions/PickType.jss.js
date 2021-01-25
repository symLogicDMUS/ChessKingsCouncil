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
            lineHeight: '1.5em',
        },
        fontFamily: 'Garamond',
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '@media screen and (min-width: 768px)': {
            width: '100%',
        },
        '@media screen and (max-width: 767px)': {
            width: getTextWidth('Game Name', fontSizes.mobile, 'Garamond'),
        },
    }),
});
