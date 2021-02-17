import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {innerHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const page_icon = () => ({
    '@media (max-aspect-ratio: 834/1194)': {
        fontSize: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.1,
    },
    '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
        fontSize:(innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.12,
    },
    width: '0.8em',
    height: '0.8em',
    paddingLeft: '0.25em',
    marginRight: '0.5em',
});

export const useStyles = makeStyles({
    page_link: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        fontSize: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.1,
        marginBottom: '0.7em',
    }),
    page_icon_normal: props => ({
        ...page_icon(),
        color: themes[props.theme].page_link,
    }),
    page_icon_hover: props => ({
        ...page_icon(),
        color: themes[props.theme].page_link_hover,
    }),
    page_name: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            height: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.1,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            height: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.4*0.12,
        },
    }),
});