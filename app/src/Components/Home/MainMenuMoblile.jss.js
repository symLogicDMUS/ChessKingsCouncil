import {makeStyles} from "@material-ui/core/styles";
import {availHeight, availWidth, innerHeight, innerWidth} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const useStyles = makeStyles({
    main_menu: props => ({
        width: availWidth()*0.58,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        "@media (max-aspect-ratio: 1/1)": {
            justifyContent: 'flex-start',
            height: innerHeight() - (appBarHeight + innerHeight() * 0.075),
            marginTop: '7.5vh',
            alignItems: 'flex-start',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            height: '90vh',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
    }),
    title_box: props => ({
        '@media (max-aspect-ratio: 6/10)': {
            // width: availWidth()*0.58,
            height: innerHeight()*0.3,
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            // width: availWidth()*0.58,
            height: innerHeight()*0.3,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            width:'95vw',
            transform: 'translate(0, 3.75vh)',
        },
        marginBottom: '2vh',
    }),
    title: props => ({
       height: '100%'
    }),
    page_links: props => ({
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            marginTop: 'auto',
            marginBottom: 'auto',
        },
    }),
});