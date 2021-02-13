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
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
        },
        '@media (max-aspect-ratio: 1/2)': {
            fontSize: fontSizes.ipx,
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSizes.ipad,
        },
    }),
});