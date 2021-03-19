import { makeStyles } from "@material-ui/core/styles";
import {fontSizes} from "../PieceProfiles.jss";

export const useStyles = makeStyles({
    square: props => ({
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSizes.desktop*0.125,
        },
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizes.mobile*0.125,
        },
        cursor: 'default',
    }),
}, {index: 1});