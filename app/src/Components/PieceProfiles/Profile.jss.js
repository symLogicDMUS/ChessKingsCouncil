import {makeStyles} from "@material-ui/core/styles";
import {fontSizes} from "./PieceProfiles.jss";

export const profileHeight = 31.5;

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexWrap: 'wrap',
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizes.short,
            height: `${profileHeight}em`,
            width: '98%',
            margin: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',

        },
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            height: `${profileHeight}em`,
            flexDirection: 'row',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            width: '95.5%',
            height: 'unset',
            margin: 'auto',
            flexDirection: 'column',
        },
    }),
});
