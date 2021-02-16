import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {innerHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const page_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '0.9em',
    height: '0.9em',
    paddingLeft: '0.25em',
    marginRight: '0.25em',
});

export const page_name = (fontSize) => ({
    fontSize: fontSize,
    fontFamily: 'Garamond',
    marginLeft: '0.25em',
    flexGrow: 100,
});

export const useStyles = makeStyles({
    page_link: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: (innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.1,
        marginBottom: '0.25em',
        marginLeft: '0.5em',
    }),
    page_icon_normal: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            ...page_icon((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.1),
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            ...page_icon((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.12),
        },
        color: themes[props.theme].page_link,
    }),
    page_name_normal: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            ...page_name((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.1),
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            ...page_name((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.12),

        },
        color: themes[props.theme].page_link,
    }),
    page_icon_hover: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            ...page_icon((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.1),
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            ...page_icon((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.12),
        },
        color: themes[props.theme].page_link_hover,
    }),
    page_name_hover: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            ...page_name((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.1),
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            ...page_name((innerHeight() - (appBarHeight + innerHeight() * 0.075))*0.45*0.12),
        },
        color: themes[props.theme].page_link_hover,
    }),
});