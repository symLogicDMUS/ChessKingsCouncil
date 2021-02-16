import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availHeight, availWidth, innerHeight} from "../helpers/windowMeasurments";
import {fontSize002} from "../styles/fontSizes.jss";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const useStyles = makeStyles({
    main_menu: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "@media (max-aspect-ratio: 1/1)": {
            justifyContent: 'flex-start',
            height: innerHeight() - (appBarHeight + innerHeight() * 0.075),
            marginTop: '7.5vh',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            height: '90vh',
            justifyContent: 'center',
            alignContent: 'center',
        },
    }),
    title: props => ({
        '@media (max-aspect-ratio: 6/10)': {
            width: availWidth() * 0.6,
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            width: innerHeight() * 0.3,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            width:'95vw',
            transform: 'translate(0, 3.75vh)',
        },
        marginBottom: '2vh'
    }),
    page_links: props => ({
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            marginTop: 'auto',
            marginBottom: 'auto',
        },
    }),
});