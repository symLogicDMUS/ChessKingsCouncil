import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";
import {fontSizes} from "./PieceProfiles.jss";

export const profileHeight = 31.5;

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexWrap: 'wrap',
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
            width: '94%',
            margin: 'auto',
            flexDirection: 'column',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            height: `${profileHeight}em`,
            width: '98%',
            margin: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            height: `${profileHeight}em`,
            flexDirection: 'row',
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSizes.ipad,
            width: '95.5%',
            height: 'unset',
            margin: 'auto',
            flexDirection: 'column',
        },
    }),
});
