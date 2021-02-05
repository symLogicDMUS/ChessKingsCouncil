import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";
import {fontSizes} from "./PieceProfiles.jss";

export const profileHeight = 31.5;

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
            justifyContent: 'space-evenly',
            height: `${profileHeight}em`,
            width: availWidth(),
        },
        "@media (aspect-ratio: 375/812)": {
            fontSize: fontSizes.ipx,
            height: `${profileHeight*1.1}em`,
        }
    }),
});
