import { makeStyles } from "@material-ui/core/styles";
import {fontSizes} from "../../PieceProfiles/PieceProfiles.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    list_item: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        cursor: 'pointer',
        '&:hover':{
            color: themes[props.theme].sqr_hover,
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile,
        },
        '@media screen and (max-width: 412px)': {
            fontSize: fontSizes.ipx,
        },
        '@media screen and (min-width: 768px) and (max-width: 1040px)':{
            fontSize: fontSizes.ipad,
        },
    }),
}, {index: 1});