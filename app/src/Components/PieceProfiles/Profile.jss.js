import {makeStyles} from "@material-ui/core/styles";
import {fontSizes} from "./PieceProfiles.jss";

export const profileHeight = 31.5;

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexWrap: 'wrap',
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: '94%',
            margin: 'auto',
            flexDirection: 'column',
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            height: `${profileHeight}em`,
            width: '98%',
            margin: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        "@media screen and (max-device-width: 412px)": {
            fontSize: fontSizes.ipx,
            height: `${profileHeight}em`,
            flexDirection: 'row',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            fontSize: fontSizes.ipad,
            width: '95.5%',
            height: 'unset',
            margin: 'auto',
            flexDirection: 'column',
        },
    }),
}, {index: 1});
