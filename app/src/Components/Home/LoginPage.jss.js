import { makeStyles } from "@material-ui/core/styles";
import {availWidth, viewHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/Drawers/PersistentDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    login_page: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "@media (max-device-width: 1040px)": {
            justifyContent: 'flex-start',
            height: viewHeight() - (appBarHeight + viewHeight() * 0.075),
        },
        '@media screen and (min-device-width: 1040px)': {
            height: '90vh',
            justifyContent: 'center',
            alignContent: 'center',
        },
    }),
    app_title_mobile: props => ({
        '@media screen and (max-device-width: 412px)': {
            width: availWidth() * 0.6,
        },
        "@media screen and (min-device-width: 412px) and (max-device-width: 768px)": {
            width: viewHeight() * 0.3,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            width:'95vw',
        },
        marginBottom: '1vh',
    }),
    app_title_desktop: (props) => ({
        width: availWidth() * 0.8,
    }),
}), {index: 1});