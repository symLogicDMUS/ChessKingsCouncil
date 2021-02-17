import { makeStyles } from "@material-ui/core/styles";
import {fontSizes} from "./PieceProfiles.jss";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    range_list_item: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        cursor: 'pointer',
        '&:hover':{
            color: themes[props.theme].sqr_hover,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
        },
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            fontSize: fontSizes.ipx,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
        },
    }),
});