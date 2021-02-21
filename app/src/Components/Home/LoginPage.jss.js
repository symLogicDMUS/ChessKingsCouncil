import { makeStyles } from "@material-ui/core/styles";
import {availHeight, availWidth, viewHeight} from "../helpers/windowMeasurments";
import {fontSize002} from "../styles/fontSizes.jss";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";


export const useStyles = makeStyles((theme) => ({
    login_page: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "@media (max-aspect-ratio: 1/1)": {
            justifyContent: 'flex-start',
            height: viewHeight() - (appBarHeight + viewHeight() * 0.075),
            marginTop: '7.5vh',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            justifyContent: 'center',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            height: '90vh',
            justifyContent: 'center',
            alignContent: 'center',
        },
    }),
    app_title_mobile: props => ({
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            width: availWidth() * 0.6,
        },
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)": {
            width: viewHeight() * 0.3,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            width:'95vw',
        },
        marginBottom: '1vh',
    }),
    app_title_desktop: (props) => ({
        width: availWidth() * 0.8,
    }),
}));