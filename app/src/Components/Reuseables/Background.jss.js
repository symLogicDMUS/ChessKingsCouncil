import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../styles/fontSizes.jss";
import {viewHeight, viewWidth} from "../helpers/windowMeasurments";

const row = () => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const useStyles = makeStyles((theme) => ({
    background_fixed: props => ({
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }),
    background: props => ({
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-device-width: 1040px)': {
            top: 0,
        },
        '@media screen and (min-device-width: 1040px)': {
            top: '0.5%',
        },
    }),
    board_pattern: props => ({
        '@media screen and (max-device-width: 1040px)': {
            width: '7.5vh',
            height: '7.5vh',
        },
        '@media screen and (min-device-width: 1040px)': {
            width: '10vw',
            height: '10vw',
        },
    }),
    row1: props => ({
        ...row(),
    }),
    row2: props => ({
        ...row(),
        marginTop: 'auto',
        // alignSelf: 'flex-end',
    }),
    toolbar: {
        fontSize: fontSize002,
        height: '3em',
    },
    drawerHeader: props => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }),
}));
