import {makeStyles} from "@material-ui/core/styles"
import {innerHeight, innerWidth} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";
import {
    fontSize012,
    fontSize0016,
    fontSize0018,
    fontSizeW018,
    fontSize002,
    fontSize001725,
    fontSizeW015,
} from "../styles/fontSizes.jss";


export const fontSizes = {
    desktop: fontSize012,
    mobile: fontSizeW015,
    ipx: fontSizeW018,
    ipad: fontSize012,
}

export const dropdownGenStyle = (screenCase) => {
    switch (screenCase) {
        case 'short':
            return {width: '50%'};
        default:
            return {width: '58%'};
    }
};

export const textFieldGenStyle = (screenCase) => {
    switch (screenCase) {
        case 'short':
            return {width: '50%'};
        default:
            return {width: '100%'};
    }
};

export const useStyles = makeStyles({
    new_game: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            height: (innerHeight() - appBarHeight)*0.925,
            marginTop: '7.5vh',
        },
        /*medium/short height phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 6/10) and (max-aspect-ratio: 7/10)":{
            height: (innerHeight() - appBarHeight)*0.85,
            marginTop: '7.5vh',
        },
        /*tall phones*/
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)":{
            height: (innerHeight() - appBarHeight)*0.85,
            marginTop: '7.5vh',
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            height: (innerHeight() - appBarHeight)*0.85,
            marginTop: '7.5vh',
        },
        '@media screen and (min-aspect-ratio: 1/1) and (min-device-width: 992px)': {
            height: '90vh',
        },
    }),
    item: props => ({
        display: 'flex',
        alignItems: 'center',
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            width: innerWidth() * 0.85,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        /*medium/short height phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 6/10) and (max-aspect-ratio: 7/10)":{
            width: innerWidth() * 0.7,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        /*tall phones*/
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)":{
            width: innerWidth() * 0.7,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            width: innerWidth() * 0.7,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        /*desktop*/
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            width: innerWidth() * 0.3,
            flexDirection: 'column',
            justifyContent: 'center',
        },
    }),
    title: props => ({
        width: '100%',
        marginBottom: '1.5vh',
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            width: '45%',
        },
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '75%',
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            width: '50%',
            justifyContent: 'space-between',
        },
    }),
    game_types_divider: props => ({
        width: '5%',
    }),
    player_type: props => ({
        fontSize: fontSize0018,
    }),
    play_button: props => ({
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSize0018,
            margin: '1.5em',
            width: '85%'
        },
        /*medium/short height phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 6/10) and (max-aspect-ratio: 7/10)":{
            fontSize: fontSize0018,
            margin: '1.5em',
            width: '40%',
        },
        /*tall phones*/
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)":{
            fontSize: fontSize001725,
            margin: '1em',
            width: '40%',
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSize002,
            margin: '1em',
            width: '40%',
        },
        /*laptop/desktop*/
        '@media screen and (min-device-width: 991px) and (min-aspect-ratio: 1/1)':{
            fontSize: fontSize0016,
            margin: '1.5em',
            width: '100%',
        },
    }),
});
