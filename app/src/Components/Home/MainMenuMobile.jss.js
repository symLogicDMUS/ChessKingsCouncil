import {makeStyles} from "@material-ui/core/styles";
import {availWidth, innerHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const sign_out_adjuster = (screenCase) => {
    switch (screenCase) {
    case 'ipad':
        return {marginBottom: '1.2em'}
    case 'short':
        return {marginBottom: '0.15em'}
    default:
        return {marginBottom: '-0.1em'}
    }
};

export const my_pieces_adjuster = () => ({
    marginBottom: '0.25em',
});

export const create_piece_adjuster = (screenCase) => {
    switch (screenCase) {
        case 'ipad':
            return {marginBottom: '1.2em'}
        case 'short':
            return {marginBottom: '1.2em'}
        default:
            return {marginBottom: '1em'}
    }
};

export const icon_adjuster = () => ({
    transform: 'translate(0, -0.22em)'
});

export const useStyles = makeStyles({
    main_menu: props => ({
        width: availWidth()*0.58,
        display: 'flex',
        flexDirection: 'column',
        "@media (max-aspect-ratio: 360/515)": {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '7.5vh',
            height: innerHeight() - (appBarHeight + innerHeight() * 0.075),
        },
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            marginLeft: '7vh',
            marginTop: '7.5vh',
            height: innerHeight() - appBarHeight,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            marginLeft: '7.5vh',
            marginTop: '7.5vh',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: innerHeight() - (appBarHeight + innerHeight() * 0.075),
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            height: '90vh',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
    }),
    title_box: props => ({
        '@media (max-aspect-ratio: 360/515)': {
            height: innerHeight()*0.3,
            marginBottom: '2vh',
        },
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            width: availWidth()-(innerHeight()*0.15),
            height: 'unset',
            marginBottom: 0,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            height: innerHeight() * 0.08,
            transform: 'translate(0, 3.75vh)',
            marginBottom: '2.5vh',
        },
    }),
    title: props => ({
        width: '100%'
    }),
    page_links: props => ({
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            marginBottom: 'auto',
        },
    }),
});