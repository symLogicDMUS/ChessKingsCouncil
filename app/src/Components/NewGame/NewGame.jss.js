import {makeStyles} from "@material-ui/core/styles"
import {viewHeight, viewWidth} from "../helpers/windowMeasurments";
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
import {themes} from "../styles/themes.jss";


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
        /*media query for phones and tablets (generalized)*/
        '@media screen and (max-aspect-ratio: 1/1)': {
            height: (viewHeight() - appBarHeight)*0.825,
            marginTop: '7.5vh',
        },
        '@media screen and (min-aspect-ratio: 1/1) and (min-device-width: 992px)': {
            height: '90vh',
        },
        // border: '1px dashed black',
    }),
    item: props => ({
        display: 'flex',
        alignItems: 'center',
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            width: viewWidth() * 0.85,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        /*medium/short height phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 6/10) and (max-aspect-ratio: 85/100)":{
            width: viewWidth() * 0.7,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        /*tall phones*/
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)":{
            width: viewWidth() * 0.7,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            width: viewWidth() * 0.7,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        /*desktop*/
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            width: viewWidth() * 0.3,
            flexDirection: 'column',
            justifyContent: 'center',
        },
    }),
    title: props => ({
        width: '100%',
        marginBottom: '1.5vh',
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
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
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
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

});
